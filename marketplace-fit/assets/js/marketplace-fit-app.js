(() => {
  const state = {
    clientEmail: '',
    answers: {}
  };

  function answeredCount() {
    return Object.keys(state.answers).length;
  }

  function pickAnswer(qid, idx) {
    state.answers[qid] = idx;
    window.MARKETPLACE_FIT_RENDER.buildQuestions('aBody', state.answers, pickAnswer);
    window.ESF_SHELL.setProgress(
      answeredCount(),
      window.MARKETPLACE_FIT_DATA.totalQuestions,
      'progTxt',
      'progFill'
    );
    document.getElementById('cBar')?.classList.toggle(
      'show',
      answeredCount() === window.MARKETPLACE_FIT_DATA.totalQuestions
    );
  }

  async function submitAssessment() {
    if (answeredCount() < window.MARKETPLACE_FIT_DATA.totalQuestions) {
      alert('Please answer all 12 questions before submitting');
      return;
    }

    if (!window.ESF_SHELL.validateEmail(state.clientEmail)) {
      alert('Invalid email. Please start from the beginning.');
      window.ESF_SHELL.show('welcomeScreen');
      return;
    }

    const btn = document.getElementById('cBtn');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Calculating...';
    }

    window.ESF_SHELL.toggleOverlay(true);

    try {
      const layerScores = window.MARKETPLACE_FIT_ENGINE.scoreLayers(state.answers);
      const platformScores = window.MARKETPLACE_FIT_ENGINE.platformScores(layerScores);
      const sorted = window.MARKETPLACE_FIT_ENGINE.sortedPlatforms(platformScores);

      const topPlatform = sorted?.[0]?.[0] || '';
      const secondPlatform = sorted?.[1]?.[0] || '';
      const topScore = sorted?.[0]?.[1] || 0;
      const secondScore = sorted?.[1]?.[1] || 0;
      const platformGap = Number((topScore - secondScore).toFixed(1));

      const recommendedDirection = topPlatform;

      const resultSummary = topPlatform
        ? `Best-fit platform: ${topPlatform}. Secondary option: ${secondPlatform || 'none'}.`
        : 'No clear platform recommendation generated.';

      await window.ESF_SHELL.submitLead({
        clientEmail: state.clientEmail,
        toolType: 'Marketplace Fit',
        sourcePage: window.location.href,
        sourceEntryPoint: 'marketplace-fit-start',

        rawAnswersJson: JSON.stringify(state.answers),
        scoresJson: JSON.stringify({
          customerFit: layerScores.cf,
          operationalFit: layerScores.of,
          financialFit: layerScores.ff,
          amazonScore: platformScores.amazon,
          shopifyScore: platformScores.shopify,
          etsyScore: platformScores.etsy
        }),

        customerFit: layerScores.cf,
        operationalFit: layerScores.of,
        financialFit: layerScores.ff,

        amazonScore: platformScores.amazon,
        shopifyScore: platformScores.shopify,
        etsyScore: platformScores.etsy,

        topPlatform,
        secondPlatform,
        platformGap,

        recommendedDirection,
        resultSummary
      });

      setTimeout(() => {
        window.ESF_SHELL.toggleOverlay(false);
        window.MARKETPLACE_FIT_RENDER.renderResults(layerScores, platformScores);
        window.ESF_SHELL.show('resultsScreen');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (btn) {
          btn.disabled = false;
          btn.textContent = 'See My Fit →';
        }
      }, 1800);
    } catch (err) {
      console.error('Marketplace Fit submission failed', err);
      window.ESF_SHELL.toggleOverlay(false);

      if (btn) {
        btn.disabled = false;
        btn.textContent = 'See My Fit →';
      }

      alert('Something went wrong while saving your results. Please try again.');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    window.ESF_SHELL.bindStartGate({
      emailId: 'emailInput',
      categoryId: null,
      consentId: 'consentCheck',
      startBtnId: 'startBtn'
    });

    const emailEl = document.getElementById('emailInput');
    const consentEl = document.getElementById('consentCheck');
    const startBtn = document.getElementById('startBtn');

    const validate = () => {
      const ok =
        window.ESF_SHELL.validateEmail(emailEl?.value || '') &&
        !!consentEl?.checked;

      if (startBtn) startBtn.disabled = !ok;
    };

    emailEl?.addEventListener('input', validate);
    consentEl?.addEventListener('change', validate);
    emailEl?.addEventListener('keydown', e => {
      if (e.key === 'Enter' && startBtn && !startBtn.disabled) {
        startBtn.click();
      }
    });
    validate();

    window.ESF_SHELL.bindBookingConsent({
      consentId: 'bookingConsent',
      buttonIds: ['ctaBtn', 'ctaBtn2']
    });

    document.getElementById('startBtn')?.addEventListener('click', () => {
      state.clientEmail = document.getElementById('emailInput')?.value.trim() || '';
      state.answers = {};
      window.MARKETPLACE_FIT_RENDER.buildQuestions('aBody', state.answers, pickAnswer);
      window.ESF_SHELL.setProgress(
        0,
        window.MARKETPLACE_FIT_DATA.totalQuestions,
        'progTxt',
        'progFill'
      );
      document.getElementById('cBar')?.classList.remove('show');
      window.ESF_SHELL.show('assessScreen');
      window.scrollTo({ top: 0, behavior: 'instant' });
    });

    document.getElementById('cBtn')?.addEventListener('click', submitAssessment);

    document.getElementById('ctaBtn')?.addEventListener('click', () => {
      window.location.href = window.ESF_CONFIG.paidBookingUrl;
    });

    document.getElementById('ctaBtn2')?.addEventListener('click', () => {
      window.location.href = window.ESF_CONFIG.freeCallUrl;
    });
  });
})();
