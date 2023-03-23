export default function decorate(block) {
    const slider = document.createElement('div');
    block.append(slider);
    slider.classList('slider');

    [...block.children].forEach((row) => {
        const slide = document.createElement('div');
        slider.append(slide);
        slide.classList('slide');

        const img = document.createElement('img');
        slide.append(img);
        img.src = "https://source.unsplash.com/random?landscape,cars";
        img.alt = ""
      });
}
