class Pagination {
  constructor() {
    this.currentPage = 1;
    this.subscribers = [];
    this.setupButtons();
  }

 setupButtons() {
    const buttons = document.querySelectorAll('.pagination__button');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (button.classList.contains('active')) return;

        if (button.id === 'prev-btn') {
          this.currentPage = Math.max(1, this.currentPage - 1);
        } else if (button.id === 'next-btn') {
          this.currentPage = this.currentPage + 1;
        } else if (button.id === 'page-1') {
          this.currentPage = 1;
        } else if (button.id === 'page-2') {
          this.currentPage = 2;
        } else if (button.id === 'page-3') {
          this.currentPage = 3;
        }

        this.updateView();
        this.notifySubscribers();
      });
    });
    
    this.updateView();
  }

  updateView() {
    document.querySelectorAll('.pagination__button').forEach(btn => {
      btn.classList.remove('active');
    });
    
    const activeBtn = document.getElementById(`page-${this.currentPage}`);
    if (activeBtn) {
      activeBtn.classList.add('active');
    }
  }

  onChange(callback) {
    this.subscribers.push(callback);
  }

  notifySubscribers() {
    this.subscribers.forEach(callback => {
      callback(this.currentPage);
    });
  }

  getPage() {
    return this.currentPage;
  }

  setPage(page) {
    this.currentPage = page;
    this.updateView();
    this.notifySubscribers();
  }
}

export const pagination = new Pagination();