/**
 * @Description: tab选项卡
 * @author Wish
 * @date 2020/1/2
 */
window.onload = function () {
  function tab() {
    const tab = document.getElementsByClassName('application_btn');
    const body = document.getElementsByClassName('application_info');
    for (let i =0; i<tab.length; i++){
      tab[i].onclick = function () {
        for (let j=0; j< body.length;j++){
          tab[j].classList.remove('btn_checked');
          body[j].classList.remove('display_b');
          body[j].classList.add('display_n');
        }
        tab[i].classList.add('btn_checked');
        body[i].classList.remove('display_n');
        body[i].classList.add('display_b');
        console.log(body[i]);
      }
    }
  }
  tab();
}
