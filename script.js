document.addEventListener('DOMContentLoaded', () => {
    const todayInput = document.getElementById('input-today');
    const displayBooking = document.getElementById('display-booking');
    const helperText = document.getElementById('helper-text');

    
    const now = new Date();
    todayInput.value = now.toISOString().split('T')[0];

    function calculateARP() {
        
        const selectedDate = new Date(todayInput.value);
        
        if (isNaN(selectedDate)) return;

        
        const resultDate = new Date(selectedDate);
        resultDate.setDate(selectedDate.getDate() + 60);

        
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedResult = resultDate.toLocaleDateString('en-IN', options);

        
        displayBooking.innerText = formattedResult;
        
        const d = String(resultDate.getDate()).padStart(2, '0');
        const m = String(resultDate.getMonth() + 1).padStart(2, '0');
        const y = resultDate.getFullYear();
        
        helperText.innerText = `Booking for ${d}/${m}/${y} opens at 08:00 AM on the date selected above.`;
    }


    todayInput.addEventListener('change', calculateARP);

    
    calculateARP();
});