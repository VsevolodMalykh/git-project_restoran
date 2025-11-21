import { currentPage } from "../shop.js";

function updateActiveButtons() {
  const buttons = document.querySelectorAll(".pagination__button");
  Array.from(buttons).forEach((button) => {
    button.classList.remove('pagination__button_active');
    if(button.classList.contains(`pagination__button_${currentPage}`)){
      button.classList.add('pagination__button_active');
    }
  });
}

export function initPagination(onPageChange) {
  const buttons = document.querySelectorAll(".pagination__button");
  
  Array.from(buttons).forEach((button) => {
    button.addEventListener('click', () => {
      if(button.classList.contains("pagination__button_active")){
        return;
      }

    //   if(button.classList.contains("pagination__button_prev")){
    //     currentPage = currentPage > 1 ? currentPage - 1 : 3;
    //   } else if (button.classList.contains("pagination__button_next")) {
    //     currentPage = currentPage < 3 ? currentPage + 1 : 1;
    //   } else 
        if (button.classList.contains("pagination__button_1")){
        currentPage.setCurrentPage(1);
      } else if (button.classList.contains("pagination__button_2")){
        currentPage.setCurrentPage(2);
      } else if (button.classList.contains("pagination__button_3")){
        currentPage.setCurrentPage(3);
      }

      updateActiveButtons();
      onPageChange(currentPage.getCurrentPage());
    });
  });
  
  updateActiveButtons();
}

export function getFinalCurrentPage(){
    return currentPage.getCurrentPage()
}