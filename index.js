
        document.getElementById('box-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const boxCountInput = document.getElementById('boxCount');
            const boxCount = parseInt(boxCountInput.value);

            if (isNaN(boxCount) || boxCount <= 0) {
                alert('Please enter a valid positive integer.');
            } else {
                generateBoxes(boxCount);
            }
        });

        function generateBoxes(count) {
            const container = document.getElementById('container');
            container.innerHTML = '';

            for (let i = 1; i <= count; i++) {
                const box = document.createElement('div');
                box.className = 'box';
                box.textContent = `Box ${i}`;
                container.appendChild(box);
            }
        }
