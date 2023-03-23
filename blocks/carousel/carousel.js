export default function decorate(block) {
    const slider = document.createElement('div');
    slider.classList("slider");

    [...block.children].forEach((row) => {
        const slide = document.createElement('div');
        slide.classList("slide");
        slider.append(slide);

        const img = document.createElement('img');
        img.setAttribute("src", "https://source.unsplash.com/random?landscape,cars");
        img.setAttribute("alt", "");
        slide.append(img);
      });

    block.append(slider);
}
