/**
 * @file
 */

import './autoback.scss';

export let Autoback = function() {
}


Autoback.install = function () {
    //
    // Get the autoback stack from session storage
    //
    let backStack = window.sessionStorage.getItem('cl-autoback');
    if(backStack !== null) {
        try {
            backStack = JSON.parse(backStack);
        } catch(exception) {
            backStack = [];
        }

    } else {
        backStack = [];
    }

    function compareLocations(a, b) {
        a = a.replace(/\/$/, '');
        b = b.replace(/\/$/, '');
        return a===b;
    }

    //
    // If the top of the stack is this page, we got here
    // through an autoback link.
    //
    if(backStack.length < 2 || !compareLocations(backStack.pop(), window.location.href)) {
        // Did not get here through an autoback link, so wipe the stack
        backStack = [];
    }

    let divs = document.querySelectorAll('div.cl-autoback');

    if(backStack.length === 0) {
        for(let i=0; i<divs.length; i++) {
            divs[i].innerHTML = '';
        }
    } else {
        let top = backStack[backStack.length-1];
        for(let i=0; i<divs.length; i++) {
            let div = divs[i];

            let p = document.createElement('P');
            div.innerHTML = '';
            div.appendChild(p);

            let a = document.createElement('A');
            if(div.classList.contains('cl-strip')) {
                let space = top.title.indexOf(' ');
                a.textContent = top.title.substr(space + 1);
            } else {
                a.textContent = top.title;
            }

            a.href = top.href;
            p.appendChild(a);

            a.onclick = (event) => {
                backStack.pop();
                backStack.push(top.href);
                window.sessionStorage.setItem('cl-autoback', JSON.stringify(backStack));
            }
        }
    }

    document.body.addEventListener('click', (event) => {
        let clickedOn = event.target;
        if(clickedOn.tagName === 'A' &&
            clickedOn.classList.contains('cl-autoback')) {

            // Save where we are coming from and where we are going to...
            backStack.push({title: document.title, href: window.location.href});
            backStack.push(clickedOn.href);
            window.sessionStorage.setItem('cl-autoback', JSON.stringify(backStack));
        }
    });

}


