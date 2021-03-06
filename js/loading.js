// 로딩 소스
function imagesProgress() {
  let $container = $("#progress"),
    $progressText = $container.find(".progress-text"),
    imgLoad = imagesLoaded("body"),
    imgTotal = imgLoad.images.length,
    imgLoaded = 0,
    current = 0,
    progressTimer = setInterval(updateProgress, 2000 / 38);

  imgLoad.on("progress", function () {
    imgLoaded++;
  });

  function updateProgress() {
    let target = (imgLoaded / imgTotal) * 100;

    current += (target - current) * 0.1;
    $progressText.text(Math.floor(current) + "%");

    if (current >= 100) {
      clearInterval(progressTimer);
      $container
        .animate({ opacity: "0" }, 1000, "easeInOutQuint")
        .animate({ top: "-100%" }, 1);

      gsap.to("#header", {
        top: 0,
        opacity: 1,
        duration: 1.5,
        delay: 1.0,
        ease: "circ.out",
      });
      gsap.to("#info .frontend ", {
        top: 0,
        opacity: 1,
        duration: 2.5,
        delay: 1.2,
        ease: "circ.out",
      });
      gsap.to(".developer_black_box ", {
        top: 0,
        opacity: 1,
        duration: 2.5,
        delay: 1.7,
        ease: "circ.out",
      });

      // gsap.to("#mainview .right .main_img", {
      //   opacity: 1,
      //   duration: 0.5,
      //   delay: 1,
      // });

      // gsap.to("#mainview .line", {
      //   opacity: 1,
      //   duration: 0.5,
      //   delay: 1,
      // });

      // gsap.to("#mainview .left .planet", {
      //   opacity: 1,
      //   duration: 0.5,
      //   delay: 1.9,
      // });

      // gsap.to("#mainview .contents .scrolldown", {
      //   opacity: 1,
      //   duration: 1,
      //   delay: 2.2,
      // });

      // gsap.to("#mainview .left h2 span", {
      //   opacity: 1,
      //   y: 0,
      //   duration: 3.5,
      //   delay: 2.7,
      //   stagger: 0.1,
      //   ease: "elastic.out(1, 0.3)",
      // });

      // gsap.to("#mainview .left p span", {
      //   opacity: 1,
      //   duration: 0.6,
      //   delay: 3.2,
      //   stagger: 0.03,
      // });

      // gsap.to("#mainview .left a", {
      //   opacity: 1,
      //   duration: 0.6,
      //   delay: 8.5,
      //   stagger: 0.03,
      // });
    }
    if (current > 99.9) {
      current = 100;
    }
  }
}
imagesProgress();
