
function generateOrderCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'CB';
    for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function buyAccount(type, price) {
    const orderCode = generateOrderCode();
    const accountType = type === 'small' ? 'Acc Candy Nhỏ' : 'Acc Candy Lớn';
    
    // Show success modal
    const modal = document.getElementById('successModal');
    const orderDetails = document.getElementById('orderDetails');
    
    orderDetails.innerHTML = `
        <h3>Thông tin đơn hàng:</h3>
        <p><strong>Sản phẩm:</strong> ${accountType}</p>
        <p><strong>Giá:</strong> ${price}</p>
        <div class="order-code">Mã đơn hàng: ${orderCode}</div>
        <p><strong>Bonus:</strong> Dragon Fly miễn phí! 🐉</p>
    `;
    
    modal.style.display = 'block';
    
    // Add celebration effect
    createConfetti();
}

function closeModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none';
}

function collectPet(petName, price) {
    const orderCode = generateOrderCode();
    
    // Show pet collection modal
    const modal = document.getElementById('petModal');
    const petDetails = document.getElementById('petDetails');
    
    petDetails.innerHTML = `
        <h3>Thông tin giao dịch thu pet:</h3>
        <p><strong>Pet:</strong> ${petName}</p>
        <p><strong>Giá thu:</strong> ${price}</p>
        <div class="order-code">Mã giao dịch: ${orderCode}</div>
        <p style="color: #e91e63; font-weight: bold;">⚠️ Bạn cần đưa pet trước, shop sẽ gửi thẻ cào sau!</p>
    `;
    
    modal.style.display = 'block';
    
    // Add celebration effect
    createConfetti();
}

function closePetModal() {
    const modal = document.getElementById('petModal');
    modal.style.display = 'none';
}

function createConfetti() {
    const colors = ['#e91e63', '#4caf50', '#2196f3', '#ff9800', '#9c27b0'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.zIndex = '9999';
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            
            document.body.appendChild(confetti);
            
            const animation = confetti.animate([
                { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight + 20}px) rotate(360deg)`, opacity: 0 }
            ], {
                duration: 3000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            animation.onfinish = () => {
                confetti.remove();
            };
        }, i * 100);
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const successModal = document.getElementById('successModal');
    const petModal = document.getElementById('petModal');
    
    if (event.target === successModal) {
        closeModal();
    }
    if (event.target === petModal) {
        closePetModal();
    }
}

// Add some interactive elements on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add floating animation to product cards
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = (index * 0.2) + 's';
        card.style.animation = 'float 3s ease-in-out infinite';
    });
    
    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
});
