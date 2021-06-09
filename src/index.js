import css from './css/styles.css';
import refs from './js/refs';
import timerTpl from './templates/timer.hbs';



// const { daysEl, hoursEl, minutesEl, secondsEl, timerEl } = refs;
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
            this.makeMarkup(),

            this.start()

        }

        // start() {
        //     setInterval(() => {

        //         const result = this.getTimeComponents(this.getDate());
        //         // console.log(result);
        //         daysEl.textContent = result.days;
        //         hoursEl.textContent = result.hours;
        //         minutesEl.textContent = result.mins;
        //         secondsEl.textContent = result.secs;

        //             }, 1000);


        // }

        makeMarkup() {
            const timerMarkup = timerTpl();
            console.log(timerMarkup);
            document.body.insertAdjacentHTML('afterbegin', timerMarkup);
            const divTimerEl = document.querySelector('.timer');
            divTimerEl.id = this.selector;
            // const refs = {
            //     daysEl: document.querySelector('[data-value="days"]'),
            //     hoursEl: document.querySelector('[data-value="hours"]'),
            //     minutesEl: document.querySelector('[data-value="mins"]'),
            //     secondsEl: document.querySelector('[data-value="secs"]'),
            //     timerEl: document.querySelector('#timer-1')
            // }
            // console.log(refs);
            // return refs;

        }
        start() {
            const refs = {
                daysEl: document.querySelector('[data-value="days"]'),
                hoursEl: document.querySelector('[data-value="hours"]'),
                minutesEl: document.querySelector('[data-value="mins"]'),
                secondsEl: document.querySelector('[data-value="secs"]'),
                timerEl: document.querySelector('#timer-1')
            }
            // console.log(refs);
            const { daysEl, hoursEl, minutesEl, secondsEl, timerEl } = refs;
            // console.log(daysEl);

            // const result = [this.getTimeComponents(this.getDate())];
            // console.log(result);


            // const timerMarkup = timerTpl(result);
            // console.log(timerMarkup);
            // document.body.insertAdjacentHTML('afterbegin', timerMarkup);
            setInterval(() => {
            // const result = [this.getTimeComponents(this.getDate())];
            const result = this.getTimeComponents(this.getDate());
            console.log(result);


            // const timerMarkup = timerTpl(result);
            // console.log(timerMarkup);
            // document.body.insertAdjacentHTML('afterbegin', timerMarkup);
                // document.body.insertAdjacentElement('afterbegin', timerMarkup);

                // console.log(result);
                // const timerMarkup = timerTpl(result.days, result.hours, result.mins, result.secs);
                // document.body.insertAdjacentHTML('afterbegin', timerMarkup);
                daysEl.textContent = result.days;
                hoursEl.textContent = result.hours;
                minutesEl.textContent = result.mins;
                secondsEl.textContent = result.secs;
                // return result;

            }, 1000);


        }

        getDate() {
            const currentDate = Date.now();
        // console.log(currentDate);

        // const targetDate = new Date('Jun 17, 2021').getTime();
        const targetDate = new Date(this.targetDate).getTime();
        // console.log(targetDate);

        let time = targetDate - currentDate;
        // console.log(time);
        return time;
        }

        getTimeComponents(time) {

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        // console.log(days);
        // daysEl.textContent = days;

        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // console.log(hours);
        // hoursEl.textContent = hours;

        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        // console.log(mins);
        // minutesEl.textContent = mins;

        const secs = Math.floor((time % (1000 * 60)) / 1000);
        // console.log(secs);
        // secondsEl.textContent = secs;
        return { days, hours, mins, secs };
        // return timeToEnd;
        // return [days, hours, mins, secs];
        }
        // getMarkUp({ days, hours, mins, secs }) {
        //     const result = this.getTimeComponents(this.getDate());
        //     console.log(result);
        //     // const timeToEnd = { days, hours, mins, secs };
        // // getMarkUp(timeToEnd) {
        //     // this.getTimeComponents({days, hours, mins, secs});

        //     // const timerMarkup = timerTpl(days, hours, mins, secs);
        //     daysEl.textContent = result.days;
        //     hoursEl.textContent = result.hours;
        //     minutesEl.textContent = result.mins;
        //     secondsEl.textContent = result.secs;

            // console.log(timerMarkup);
            // return document.body.insertAdjacentHTML('afterbegin', timerMarkup);
            // return document.body.insertAdjacentHTML('afterbegin', timerMarkup);
            // return timerMarkup;
        // }
        // setInterval(() => {
            // // start() {


                //     // this.selector = updateTimer(days, hours, mins, secs);

                //     }, 1000);

    }

            // }

const timer = new CountdownTimer('#timer-1', 'Jun 17 2021');
const timer2 = new CountdownTimer('#timer-2', 'Jan 30 2022');
const timer3 = new CountdownTimer('#timer-2', 'Aug 01 2021');
// console.log(timer);
// console.log(timer.targetDate);
// timer.getMarkUp(timer.targetDate);
// document.body.insertAdjacentHTML('afterbegin', timer.getMarkUp(timer.targetDate));



// function updateTimer({days, hours, mins, secs}) {
//     daysEl.textContent = days;
//     hoursEl.textContent = hours;
//     minutesEl.textContent = mins;
//     secondsEl.textContent = secs;
// }