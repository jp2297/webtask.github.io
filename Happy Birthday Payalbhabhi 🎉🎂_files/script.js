
        function createBalloon() {
            let balloon = document.createElement("div");
            let colors = ["🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "🎈"];
            balloon.innerHTML = colors[Math.floor(Math.random() * colors.length)];
            balloon.className = "balloons";
            balloon.style.left = Math.random() * 100 + "vw";
            balloon.style.animationDuration = (Math.random() * 3 + 4) + "s";
            document.body.appendChild(balloon);
            setTimeout(() => { balloon.remove(); }, 6000);
        }
        setInterval(createBalloon, 400);

        function createConfetti() {
            let confetti = document.createElement("div");
            let confettiColors = ["🎊", "🎉", "✨", "💫", "🌟"];
            confetti.innerHTML = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            confetti.className = "confetti";
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.top = "-10px";
            confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
            document.body.appendChild(confetti);
            setTimeout(() => { confetti.remove(); }, 4000);
        }
        setInterval(createConfetti, 300);

