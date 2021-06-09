import css from './css/styles.css';
import timerTpl from './templates/timer.hbs';

    class CountdownTimer {
        constructor(selector, date) {
            this.selector = selector,
            this.targetDate = new Date(date),
            this.makeMarkup(),
            this.start()

        }

        makeMarkup() {
            const timerMarkup = timerTpl();
            document.body.insertAdjacentHTML('afterbegin', timerMarkup);
            const divTimerEl = document.querySelector('.timer');
            divTimerEl.id = this.selector;
        }

        start() {
            const refs = {
                daysEl: document.querySelector('[data-value="days"]'),
                hoursEl: document.querySelector('[data-value="hours"]'),
                minutesEl: document.querySelector('[data-value="mins"]'),
                secondsEl: document.querySelector('[data-value="secs"]'),
            }

            setInterval(() => {

            const result = this.getTimeComponents(this.getDate());

                refs.daysEl.textContent = result.days;
                refs.hoursEl.textContent = result.hours;
                refs.minutesEl.textContent = result.mins;
                refs.secondsEl.textContent = result.secs;

            }, 1000);
        }

        getDate() {
            const currentDate = Date.now();
            const targetDate = new Date(this.targetDate).getTime();
            let time = targetDate - currentDate;
            return time;
        }

        getTimeComponents(time) {
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);
            return { days, hours, mins, secs };

        }

    }


// Вызовы таймера
const timer = new CountdownTimer('#timer-1', 'Jun 17 2021');
const timer2 = new CountdownTimer('#timer-2', 'Jan 30 2022');
const timer3 = new CountdownTimer('#timer-3', 'Aug 01 2021');
