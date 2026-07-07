(function () {
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('[data-nav-toggle]');
  const navLinks = document.querySelector('[data-nav-links]');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const open = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const calculator = document.querySelector('[data-calculator]');
  if (calculator) {
    const monthlyNode = calculator.querySelector('[data-monthly]');
    const annualNode = calculator.querySelector('[data-annual]');
    const fields = ['fuel', 'maintenance', 'stock', 'sales', 'hours'];

    function valueOf(name) {
      const input = calculator.elements[name];
      return Number(input && input.value ? input.value : 0);
    }

    function updateCalculator() {
      const directMonthly = valueOf('fuel') + valueOf('maintenance') + valueOf('stock') + valueOf('sales');
      const outageHours = valueOf('hours');
      const estimatedFrictionCost = outageHours > 0 ? outageHours * 30 * 250 : 0;
      const monthly = directMonthly + estimatedFrictionCost;
      const annual = monthly * 12;
      if (monthlyNode) monthlyNode.textContent = formatter.format(monthly);
      if (annualNode) annualNode.textContent = formatter.format(annual);
    }

    fields.forEach((name) => {
      const input = calculator.elements[name];
      if (input) input.addEventListener('input', updateCalculator);
    });
    updateCalculator();
  }

  const intakeForm = document.querySelector('[data-intake-form]');
  if (intakeForm) {
    intakeForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(intakeForm).entries());
      const previous = JSON.parse(localStorage.getItem('smePowerRequests') || '[]');
      previous.push({ ...data, createdAt: new Date().toISOString() });
      localStorage.setItem('smePowerRequests', JSON.stringify(previous));
      intakeForm.reset();
      const success = intakeForm.querySelector('[data-success]');
      if (success) {
        success.hidden = false;
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }
})();
