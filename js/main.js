const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];
    
    const imgContainer = document.getElementById('img-container');
    let imageActive = 0;

    setInterval(clockImage, 3000);

    for (let index = 0; index < images.length; index++) {
        
        const newImg = document.createElement('img');

        newImg.classList.add('ms_img_block');

        newImg.setAttribute('src' , images[index]);
        
        if (index != 0) {
            
            newImg.classList.add('d-none');
        }

        imgContainer.append(newImg);

    }
        
        //! NEXT BUTTON
        let imageList = imgContainer.children;
        const nextButton = document.getElementById('next-btn');
        nextButton.addEventListener('click' , function(){

            imageList[imageActive].classList.add('d-none');
    
            ++imageActive;
    
            
            if (imageActive === images.length){
    
                imageActive = 0;
                
            }
    
            imageList[imageActive].classList.remove('d-none');
        })
        //! NEXT BUTTON
    
        //? PREV BUTTON
        const prevButton = document.getElementById('prev-btn');
        prevButton.addEventListener('click' , function(){
    
            imageList[imageActive].classList.add('d-none');
    
            --imageActive;
    
            if (imageActive === -1) {
                
                imageActive = images.length-1;
    
            }
    
            imageList[imageActive].classList.remove('d-none');
        })
        //? PREV BUTTON
    



    // * FUNCTION * \\
    function clockImage() {

        let imageList = imgContainer.children;

        imageList[imageActive].classList.add('d-none');

        ++imageActive;


        if (imageActive === images.length) {

            imageActive = 0;

        }

        imageList[imageActive].classList.remove('d-none');

        return imageActive;
    }
    // * FUNCTION * \\