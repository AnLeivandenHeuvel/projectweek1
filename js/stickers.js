document.querySelectorAll(".sticker").forEach(st => {
    st.addEventListener("click", () => {
        st.style.transform = "scale(1.25) rotate(-5deg)";
        setTimeout(() => {
            st.style.transform = "";
        }, 300);
    });
});
