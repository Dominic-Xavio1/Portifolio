
export default function HomePage(){
    return(
    <>
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dominique Savio</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" href="image/450.jpg" type="image/jpg" />
    <link
      href="https://db.onlinewebfonts.com/c/d95bf2f30035a050142565e03d44da71?family=Aeonik"
      rel="stylesheet"
    />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@700;800&display=swap" rel="stylesheet">
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<link rel="stylesheet" href="fontawesome/css/all.min.css">
  </head>
  <body>
    <nav>
      <section className="nav">
        <h1  className="link1 link12">BySavio</h1>
        <div className="nav-links">
          <a className="link1" href="#home">Home</a>
          <a  className="link1" href="#about">About</a>
          <a  className="link1" href="#projects">Projects</a>
          <a  className="link1" href="#contact">Contact</a>
          <a  className="link1" href="#skills">Skills</a>
        </div>
        <div className="nav-button">
          <a href="mailto:dominicxavio09@gmail.com" className="link1 link12   " style="font-size: 18px;font-weight: bold;position: fixed; top: 8px; right: 60px;">Schedule a call</a>
        </div>
      </section>
    </nav>
    <section  sytle="margin-top:300px;">
      <div className="position">
        <div className="words">
          <h1 style="font-family: 'Syne', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #facc15;
  text-transform: uppercase;" data-aos="zoom-in"id="home" data-aos-duration="1230">Hi, I'm Dominique Savio</h1>
          <p  style="font-family: 'Syne', cursive;" className="description" data-aos="flip-left" data-aos-duration="1300">
            A passionate developer and <strong style="color: #facc15;">future tech innovator</strong>. I build clean,
            modern, and purpose-driven websites and applications that solve
            real-world problems. Welcome to my digital portfolio — where
            creativity meets code.
          </p>
           <div className="contact">
        <div className="conta hover" data-aos="flip-left" data-aos-duration="1500">Schedule a call</div>
        <p className="conta hover"   id="skills" data-aos="flip-left" data-aos-duration="1500">Get in touch </p>
      </div>
        </div>
  <div style="  margin-top:100px;">
    <img src="image/coding.webp" width="500px" height="500px" alt="Profile Picture" style="border-radius: 3%;">
  </div>
      </div>
    </section>
    <h1 style="text-align: center; margin-top: 50px;" data-aos="zoom-in" data-aos-duration="1300">Tech Stack & Expertise</h1>
       <section className="grid"   data-aos="zoom-in" data-aos-duration="1300" >

       <div className="skills" >
        <img src="image/i1.jfif" width="60px" height="60px" alt="Profile Picture" className="profile">
        <div>
        <p ><strong>Python framework</strong></p>
        <p>Secure, scalable backend magic</p>
        </div>
       </div>
       <div className="skills">
        <img src="image/javascript.png" width="60px" height="60px" alt="Profile Picture" className="profile">
        <div>
        <p><strong>JavaScript</strong></p>
        <p>Makes my websites come alive.</p>
        </div>
       </div>
       <div className="skills">
        <img src="image/c++.jfif" width="60px" height="60px" alt="Profile Picture" className="profile">
        <div>
        <p><strong>C++</strong></p>
        <p>Where performance meets precision.</p>
       </div>
       </div>
       <div className="skills">
        <img src="image/python.jfif" width="60px" height="60px" alt="Profile Picture" className="profile">
        <div>
        <p><strong>Python</strong></p>
        <p>My go-to for clean, clever code.</p>
        </div>
       </div>
       <div className="skills">
        <img src="image/react.png" width="60px" height="60px" alt="Profile Picture" className="profile">
        <div>
        <p><strong>React</strong></p>
        <p>Dynamic UIs, built my way.</p>
        </div>
       </div>
       <div className="skills">
        <img src="image/postgres.png" width="60px" height="60px" alt="Profile Picture" className="profile">
        <div>
        <p><strong>Postgres</strong></p>
        <p>Reliable data, powerful queries.</p>
        </div>
       </div>
       <div className="skills">
        <img src="image/node.png" width="60px" height="60px" alt="Profile Picture" className="profile">
        <div>
        <p><strong>Node js</strong></p>
        <p>JavaScript, but server-side strong</p>
        </div>
       </div>
       <div className="skills">
        <img src="image/css.png" width="60px" height="60px" alt="Profile Picture" className="profile">
        <div>
        <p><strong>Cascading Style Sheet</strong></p>
        <p>Where my designs come to life.</p>
        </div>
       </div>
       <div className="skills">
        <img src="image/html.png" width="60px" height="60px" alt="Profile Picture" className="profile">
        <div>
        <p><strong>HTML</strong></p>
        <p   id="about">The backbone of every web page I build.</p>
        </div>
       </div>
       </section>
       <section>
   <div >
  <h1 style="color: #38bdf8; margin-left: 55px; margin-top: 80px;" data-aos="fade-left">Engineer of Ideas, Explorer of Reality</h1>
  <div className="underline"  style="margin-bottom: 50px;"></div>
  </div>
  <div className="about">
<div data-aos="fade-left" data-aos-duration="1000">
  <img src="image/code.webp" alt="My image" width="500" height="500" style="border-radius: 2%;">
</div>
<div  className='text-of-me' data-aos="fade-right" data-aos-duration="1000">
  <p style="margin-bottom: 20px;">I’m Dominique Savio—a passionate developer and aspiring physicist with a relentless curiosity to understand how 
    the world works and how to make it better. From a young age, I’ve been captivated by the invisible forces that govern our universe and the power 
    of technology to reshape our lives.</p><p  style="margin-bottom: 20px;">My love for building goes beyond code. I find deep joy in creating systems that solve real-world problems—whether it’s through 
      a clean user interface, a well-architected backend, or a clever fusion of scientific ideas and software logic. I believe in tools that not only work, but feel right. 
      My approach to every project is guided by logic, empathy, and a strong desire to leave a mark on people’s lives.</p>
      <p  style="margin-bottom: 20px;">I enjoy exploring physics experiments, reverse-engineering broken electronics, and turning ideas into working machines. This hands-on mindset feeds into my development work, 
        where I constantly seek better, faster, and smarter solutions.</p>
        <p  style="margin-bottom: 20px;">When I’m not immersed in code or equations, you’ll often find me dreaming up inventions, reading about 
          scientific breakthroughs, or studying how technology impacts communities.</p>
          <p  id="projects" style="margin-bottom: 20px;">I don’t just write code—I design impact. Every project I build is a step toward a future where technology serves people, where discovery becomes transformation, and where no idea is too
             ambitious if it’s backed by vision and work.</p>
</div>
  </div>
  <div>
    <button className="button" style="margin-left: 900px; margin-bottom: 50px; margin-top: 15px; " data-aos='fade-up'  >Download Resume & CV</button>
  </div>
</section>
<div className="cv">
   <a href="image/docs/mycv.pdf" download>Download my CV</a> 
</div>
<section>
  <h1 style="text-align: center;color: #38bdf8;margin-bottom: 20px;font-size: 40px;font-weight: bold;" data-aos="fade-up">What I’ve Built</h1>
  <div className="projects">
    <div className="project" data-aos="fade-up" data-aos-duration="1000">
      <img src="image/shoping.png" width="180px" height='150px' alt="Shopping Cart">
      <figcaption>Online shopping made simple.</figcaption>
      <figcaption>Fri Jun 2020 | 12:45 | 125</figcaption>
    </div>
    <div className="project" data-aos="fade-up" data-aos-duration="1000">
      <img src="image/electronic.jfif" width="180px" height='150px' alt="Shopping Cart">
      <figcaption>Tracks light, reacts right.</figcaption>
      <figcaption>Fri Jun 2020 | 12:45 | 125</figcaption>
    </div>
    <div className="project" data-aos="fade-bottom" data-aos-duration="1000">
      <img src="image/solidwork.jfif" width="180px" height='150px' alt="Shopping Cart">
      <figcaption>3D-modeled drone, engineered in SolidWorks.</figcaption>
      <figcaption>Fri Jun 2020 | 12:45 | 125</figcaption>
    </div>
    <div className="project" data-aos="fade-bottom" data-aos-duration="1000">
      <img src="image/van.jfif" width="180px" height='150px' alt="Shopping Cart">
      <figcaption>Van de Graaff: sparking high-voltage curiosity.</figcaption>
      <figcaption id="contact">Fri Jun 2020 | 12:45 | 125</figcaption>
    </div>
 
  </div>
</section>
<section>
      
        <h1 style="text-align: center; font-family: 'Syne', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #facc15;
  text-transform: uppercase; margin-bottom: 40px;" data-aos="fade-right" data-aos-duration="1500" >Have an Idea? Let’s Connect</h1>
        <div className="contact-section">
          <form  data-aos="flip-left" data-aos-duration="1500">
        <div className="form">
        <label for="name">Name:</label>
        <input type="text" id="name"  className="let" name="name" placeholder="Enter your full name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" className="let" name="email" placeholder="Enter email" required>
        </div>
        <label for="subject">Title:</label>
        <input type="text" id="subject" name="subject"placeholder="Enter title" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" placeholder required></textarea>

        <button type="submit">Submit</button>
    </form>
        </div>
</section>
<footer className="footer" data-aos="slide-up" data-aos-duration="1500" data-aos-delay="300" >
  <div className="footer-content">
   <h1 style="font-family: 'Syne', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #facc15;
  text-transform: uppercase; margin-bottom: 40px;">Let’s Stay Connected</h1>
    <p>
This portfolio showcases my journey, projects, and vision. Feel free to explore my work, and if you’d like to connect, collaborate, or just chat about ideas, I’m always open—let’s create something amazing together.</p>
        
    </p>

      <div className="social-icons">
  <a href="#">
    <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook">
  </a>
  <a href="#">
    <img src="https://img.icons8.com/color/48/twitter.png" alt="Twitter">
  </a>
  <a href="#">
    <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google">
  </a>
  <a href="#">
    <img src="https://img.icons8.com/color/48/youtube-play.png" alt="YouTube">
  </a>
  <a href="#">
    <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn">
  </a>
</div>

  </div>

</footer>
  <div className="footer-bottom">
    <p>&copy; 2025 Dominique Savio. All rights reserved.</p>
  </div>

  <script>
    AOS.init();
    </script>
  </body>
</html>
    </>
    )
}

