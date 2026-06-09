// 画像ギャラリー機能を動かす
// ここでやりたいのは、ギャラリーの各サムネイル画像にイベントリスナーをアタッチして
// クリックされたときにメイン画像をサムネイル画像に対応するものに差し替えること
function activateGallery() {
    /*let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");*/
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img ");
    let mainImage = document.querySelector("#gallery-photo img");


    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
        // クリックされたサムネイル画像をメイン画像として設定する
        let newImageSrc = thumbnail.dataset.largeVersion;
        let newAltSrc = thumbnail.dataset.title;

        console.log(newAltSrc);

        mainImage.setAttribute("src", newImageSrc);
        mainImage.setAttribute("alt", newAltSrc )

        // 更新される画像情報
        let galleryInfo = document.querySelector("#gallery-info");
        let title       = galleryInfo.querySelector(".title");
        let description = galleryInfo.querySelector(".description");

        // 現在の画像を変更する
        let currentClass = "current"
        document.querySelector("." + currentClass).classList.remove(currentClass);
        thumbnail.parentNode.classList.add(currentClass);

        // 画像の情報を更新する
        title.innerHTML       = thumbnail.dataset.title;
        description.innerHTML = thumbnail.dataset.description;
        });
    });
}
/*setAttributeは指定した要素の属性（クラス、スタイル、ID、データ属性など）
                    を追加・変更するためのJavaScriptメソッド*/