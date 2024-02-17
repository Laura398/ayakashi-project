import "./404.css";

document.addEventListener('mousemove', function(event) {
    const torch = document.querySelector('.torch') as HTMLElement;
    torch.style.top = event.pageY + 'px';
    torch.style.left = event.pageX + 'px';
});

export default function NotFound() {
    return (
        <section id="not-foud">

            <div className="text">
                <h1>404</h1>
                <h2>Uh, Ohh</h2>
                <h3>Sorry we cant find what you are looking for...</h3>
            </div>
            <div className="torch"></div>
        </section>
    );
}