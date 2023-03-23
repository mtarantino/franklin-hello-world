export default function decorate(block) {
    const slider = document.createElement('div');
    div.setAttribute("class", "slider");

    const slide = document.createElement('div');
    div.setAttribute("class", "slide");
    slider.append(slide);

    const img = document.createElement('img');
    img.setAttribute("src", "https://source.unsplash.com/random?landscape,cars");
    img.setAttribute("alt", "");
    slide.append(img);

    block.append(slider);
  }
  