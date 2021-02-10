

# Roval theme

Roval is a one-page simple, creative and free HTML template to showcase your personal portfolio. Roval is also fully-responsive, SEO optimized, clean code and modern design. It's ready for production use !
Demo here : https://roval.dshongphuc.com/

This is a collaboration of me and [Otis Chu](https://www.behance.net/ducthanh2154b5), it was designed by him and hand coded by me. Roval Theme is a professional work, we made it to sell on Themeforest in 2017, lots of customers bought it and give very good feedbacks about it. Now we decided to remove it on Themeforest and make it public & totally free. You can use this theme to make your personal website, or make a creative resume to impress your employer.


![enter image description here](https://user-images.githubusercontent.com/19908411/107102810-36bc9b00-684e-11eb-8ae9-3e59869c4347.jpg)

# Structure
We have tried to follow the standards and modular structure while developing the theme. Following sections are explaining the theme File & Folder, structure, html file struture and plugins.

## Files & Folders
There are two folder in MAIN folder stand for two version of this template : Dark Version & Light Version. All files & subfolders inside 2 version have the same structure :

    ├── index.html
    ├── single-post.html
    ├── css/
    │   └── All css files.                                                                        
    ├── fonts/
    ├── img/
    │   └── All images
    └── js/
        └── All common Javascripts files

## HTML Structure
**index.html**

    <!--========================= PRE-LOADER ANIMATION ===========================-->  
      <div id="loading-page">
        .....
      </div><!--End #loading-page-->
    <!--========================= END PRE-LOADER ===========================-->


    <!--========================= NAVIGATION ===========================-->  
        <nav class="navbar navbar-inverses navbar-fixed-top">
            .....
                <ul class="nav navbar-nav">
                    <li><a href="">Edit or remove your menus here...</a></li>
                </ul>
            ....
        </nav><!--End .navbar-->
    <!--========================= END navigation ===========================-->  



    <!--========================= HEADER SECTION ===========================-->  
        <header id="header">
            ...
        </header>
    <!--========================= END header ===========================-->



    <!--========================= ABOUT SECTION ===========================-->   
        <section id="about">
            ....
        </section><!--End #about-->
    <!--========================= END about section ===========================-->   



    <!--========================= SKILLS SECTION ===========================-->   
        <section id="work-skills">
            ....
        </section><!--End #work-skills-->
    <!--========================= END skills section ===========================-->



    <!--========================= EXPERIENCE SECTION ===========================-->    
        <section id="work-experience">
            ....
        </section><!--End #work-experience-->
    <!--========================= END experience section ===========================-->



    <!--========================= EDUCATION SECTION ===========================-->   
        <section id="education">
            ....
        </section><!--End #education-->
    <!--========================= END education section ===========================-->



    <!--========================= FUNFACT SECTION ===========================-->   
        <section id="information-number">
            ....
        </section><!--End #information-number-->
    <!--========================= END funfact section ===========================-->



    <!--========================= PORTFOLIO SECTION ===========================-->   
        <section id="portfolio">
            ....
        </section><!--End #portfolio-->
    <!--========================= END portfolio section ===========================-->



    <!--========================= PORTFOLIO DETAIL (do not edit this one) =======================-->   
        <div id="portfolio-detail">
            .... This section is the model for your portfolio detail, you shouldn't
            change anything in this section except you sure what are you doing !
        </div><!--End #portfolio-detail-->
    <!--========================= END PORTFOLIO DETAIL (do not edit this one) ====================-->



    <!--========================= CLIENTS SECTION ===========================-->
        <section id="clients">      
            ...    
          <div id="client-quote">
            ....
                    <div class="item">
                        ... Edit the client feedback here
                    </div><!--End .item-->               
            ....
          </div><!--End #client-quote-->


          <div id="client-logos" class="row">
            ... Edit your client's logos here
          </div><!--End #client-logos-->

        </section><!--End #clients-->
    <!--========================= END clients section ===========================-->




    <!--========================= BLOG SECTION ===========================-->
        <section id="blog">
            .....  
        </section><!--End #blog-->
    <!--========================= END blog section ===========================-->



    <!--========================= CONTACT SECTION ===========================-->
        <section id="contact">
            ....    
        </section><!--End #contact-->
    <!--========================= END contact section ===========================-->


    <!--========================= FOOTER SECTION ===========================-->
        <footer>
            ...
        </footer>
    <!--========================= END footer ===========================-->


**single-post.html :**

    <!--========================= PRE-LOADER ANIMATION ===========================-->
      <div id="loading-page">
        ...
      </div><!--End #loading-page-->
    <!--========================= END PRE-LOADER ===========================-->


    <!--========================= NAVIGATION ===========================-->
        <nav class="navbar navbar-inverses navbar-fixed-top">
            ...
        </nav><!--End .navbar-->
    <!--========================= END navigation ===========================-->


    <!--========================= HEADER ===========================-->
        <header id="blog-header">
          <div class="container">        
          </div><!--End .container-->
        </header>
    <!--========================= END header ===========================-->



    <!--========================= BLOG PAGE ===========================-->     
        <section id="blog-page">
            ...

              <!--========================= MAIN CONTENT ===========================-->
                <div id="main-content" class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    ...        
                </div><!--End #main-content-->
                <!--========================= END main content ===========================-->                 


                <!--========================= SIDEBAR ===========================-->
                <div id="sidebar" class="col-lg-4 col-md-4 col-sm-12 col-xs-12">    
                    ...
                </div><!--End #sidebar-->
                <!--========================= END sidebar ===========================-->

            ...                     
        </section><!--End #blog-->
    <!--========================= end BLOG PAGE ===========================-->  


    <!--========================= FOOTER ===========================-->
        <footer>
            ...
        </footer>
    <!--========================= END footer ===========================-->   

## CSS

    ├── bootstrap.min.css
    |   └──Bootstrap framework
    ├── font-awesome.min.css
    │   └── Icons used.                                                                        
    ├── normalize.css
    |   └── Reset CSS
    ├── style.css
    │   └── Main style for this template   

## Javascript

    ├── bootstrap.min.js
    |   └──Bootstrap script framework
    ├── jquery.countTo.js
    │   └── Plugin counting for number in funfact                                                   
    ├── jquery.min.js
    |   └── jQuery library
    ├── main-script.js
    │   └── The main scriptfor this template  
    ├── particles.js
    │   └── The plugin for effect in header

  # License
 This is our hard work, we've tried all the best to make it ready for production use. It's all free for your personal use (or non-profit), we only required you to leave the credit at the bottom like how it is now.

# Credits
## Images (used in demo)

 1. [Unsplash](http://unsplash.com)
 2. [Pixabay](http://pixabay.com)
 3. [Freepik](http://Freepik.com)

## Fonts

 1. Raleway (Google fonts)
 2. Roboto (Google fonts)
 3. Droid serif (Google fonts)

## Icons
1.  [Flaticon](http://www.flaticon.com)
2.  [Font-awesome](http://fontawesome.io/icons/)

## Javascript Plugins
1.  [SmoothScroll](http://www.smoothscroll.net/)
2.  [countTo](https://github.com/mhuggins/jquery-countTo)
3.  [Particles Effect](http://github.com/VincentGarreau/particles.js)

# What's next?
I hope it's helpful for you and also hope you love it. If you have any trouble or issue when using it, feel free to open a new issue here on Github, I will try to solve it when I have time. Please star this repository and share it if you feel it's deserved :)
Thank you !
