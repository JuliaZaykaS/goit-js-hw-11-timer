import css from './css/styles.css';
import refs from './js/refs';
import timerTpl from './templates/timer.hbs';



const { daysEl, hoursEl, minutesEl, secondsEl, timerEl } = refs;
// console.log(daysEl);
// console.log(timerEl);


// new CountdownTimer({
    //   selector: '#timer-1',
    //   targetDate: new Date('Jul 17, 2019'),
    // });

    // class CountdownTimer {
        //     constructor() {
            //         this.selector: '#timer-1',
            //         this.targetDate: new Date(),
            //     }

            // }

            // const currentDate = Date.now();
// console.log(currentDate);

// const targetDate = new Date('Jun 17, 2021').getTime();
// console.log(targetDate);

// let time = targetDate - currentDate;
// console.log(time);

// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// console.log(days);
// daysEl.textContent = days;

// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// console.log(hours);
// hoursEl.textContent = hours;

// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// console.log(mins);
// minutesEl.textContent = mins;


// const secs = Math.floor((time % (1000 * 60)) / 1000);
// console.log(secs);
// secondsEl.textContent = secs;

//  new CountdownTimer({
    //   selector: '#timer-1',
    //   targetDate: new Date('Jul 17, 2019'),
    // });

    class CountdownTimer {
        constructor(selector, date) {
            this.selector = selector,
            this.targetDate = new Date(date),
                this.start()

        }

    start() {
        const currentDate = Date.now();
        console.log(currentDate);

        // const targetDate = new Date('Jun 17, 2021').getTime();
        const targetDate = new Date(this.targetDate).getTime();
        console.log(targetDate);

        let time = targetDate - currentDate;
        console.log(time);
        return time;
    }

        getTimeComponents(time) {

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        console.log(days);
        // daysEl.textContent = days;

        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        console.log(hours);
        // hoursEl.textContent = hours;

        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        console.log(mins);
        // minutesEl.textContent = mins;

        const secs = Math.floor((time % (1000 * 60)) / 1000);
        console.log(secs);
        // secondsEl.textContent = secs;
        return { days, hours, mins, secs };
    }
        getMarkUp({days, hours, mins, secs}) {
            // this.getTimeComponents({days, hours, mins, secs});

            const timerMarkup = timerTpl(this.selector, days, hours, mins, secs );
            // console.log(timerMarkup);
            // return document.body.insertAdjacentHTML('afterbegin', timerMarkup);
            return document.body.insertAdjacentHTML('afterbegin', timerMarkup);
            // return timerMarkup;
        }
        // setInterval(() => {
            // // start() {


                //     // this.selector = updateTimer(days, hours, mins, secs);

                //     }, 1000);

            }

            // }

    const timer = new CountdownTimer('#timer-1', 'Jun 17 2021');
console.log(timer);
    document.body.insertAdjacentHTML('afterbegin', timer.getMarkUp(timer.targetDate));



// function updateTimer({days, hours, mins, secs}) {
//     daysEl.textContent = days;
//     hoursEl.textContent = hours;
//     minutesEl.textContent = mins;
//     secondsEl.textContent = secs;
// }