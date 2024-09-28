import {
  Arrow,
  ArrowWhite,
  CardIcon1,
  CardIcon2,
  CardIcon3,
  Computer,
  ComputerYellow,
  Dribble,
  Girl,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  IllustrationHero,
  IllustrationHome,
  IllustrationHow,
  Insta,
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  LogoBlue,
  MainIcon,
  Nexcent,
  NexcentWhite,
  Send,
  Tesla,
  Twitter,
  Youtube,
} from "../../assets/images";
import "./styles.css";

export default function Landpage() {
  return (
    <div className="landPage">
      <header>
        <div className="icon">
          <img src={MainIcon} alt="" />
          <img src={Nexcent} alt="" />
        </div>
        <nav>
          <a href="">
            <span>Home</span>
          </a>
          <a href="">Service</a>
          <a href="">Feature</a>
          <a href="">Product</a>
          <a href="">Testimonial</a>
          <a href="">FAQ</a>
        </nav>
        <div className="buttons">
          <button>Login</button>
          <button>Sign up</button>
        </div>
      </header>

      <main>
        <section className="main">
          <div className="mainContainer">
            <h1>
              Lessons and insights <span>from 8 years</span>
            </h1>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button>Register</button>
          </div>
          <img src={IllustrationHome} alt="" />
        </section>
        <section className="balls">
          <div className="ball1"></div>
          <div className="ball2"></div>
          <div className="ball2"></div>
        </section>
      </main>
      <section className="clients">
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="clientIcon">
          <img src={Logo1} alt="" />
          <img src={Logo2} alt="" />
          <img src={Logo3} alt="" />
          <img src={Logo4} alt="" />
          <img src={Logo5} alt="" />
          <img src={Logo6} alt="" />
          <img src={Logo7} alt="" />
        </div>
      </section>
      <section className="community">
        <h1>Manage your entire community in a single system</h1>
        <p>Who is Nextcent suitable for?</p>
        <section className="communityCards">
          <div className="card">
            <img src={CardIcon1} alt="" />
            <h1>Membership Organisations</h1>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="card">
            <img src={CardIcon2} alt="" />
            <h1>National Associations</h1>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="card">
            <img src={CardIcon3} alt="" />
            <h1>Clubs And Groups</h1>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </section>
      </section>
      <section className="heroContainer">
        <img src={IllustrationHero} alt="" />
        <div className="descriptionHero">
          <h1>The unseen of spending three years at Pixelgrade</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button>Learn More</button>
        </div>
      </section>

      <section className="helpContainer">
        <div className="descriptionHelpConatiner">
          <h1>
            Helping a local <br />
            <span>business reinvent itself</span>
          </h1>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <section className="helpIcons">
          <article className="artIcons">
            <div className="alignIcons">
              <img src={Icon1} alt="" />
              <div className="descriptionIcon">
                <h1>2,245,341</h1>
                <p>Members</p>
              </div>
            </div>
            <div className="alignIcons">
              <img src={Icon3} alt="" />
              <div className="descriptionIcon">
                <h1>46,328</h1>
                <p>Clubs</p>
              </div>
            </div>
          </article>
          <article className="artIcons">
            <div className="alignIcons">
              <img src={Icon2} alt="" />
              <div className="descriptionIcon">
                <h1>828,867</h1>
                <p>Event Bookings</p>
              </div>
            </div>
            <div className="alignIcons">
              <img src={Icon4} alt="" />
              <div className="descriptionIcon">
                <h1>1,926,436</h1>
                <p>Payments</p>
              </div>
            </div>
          </article>
        </section>
      </section>
      <section className="heroContainer">
        <img src={IllustrationHow} alt="" />
        <div className="descriptionHero">
          <h1>How to design your site footer like we did</h1>
          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button>Learn More</button>
        </div>
      </section>
      <section className="teslaContainer">
        <img src={Tesla} alt="" />
        <div className="teslaDescription">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h1>Tim Smith</h1>
          <h2>British Dragon Boat Racing Association</h2>

          <div className="teslaIcons">
            <img src={LogoBlue} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo3} alt="" />
            <img src={Logo4} alt="" />
            <img src={Logo5} alt="" />
            <img src={Logo6} alt="" />
            <div className="teslaLink">
              <a href="">Meet all customers</a>
              <img src={Arrow} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="marketingContainer">
        <h1>Caring is the new marketing</h1>
        <p>
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
        <section className="marketingCards">
          <div className="marketingCard">
            <img src={Girl} alt="" />
            <div className="descriptionCard1">
              <p>Creating Streamlined Safeguarding Processes with OneRen</p>
              <div className="readCard">
                <a href="">Readmore</a>
                <img src={Arrow} alt="" />
              </div>
            </div>
          </div>
          <div className="marketingCard">
            <img src={Computer} alt="" />
            <div className="descriptionCard2">
              <p>
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <div className="readCard">
                <a href="">Readmore</a>
                <img src={Arrow} alt="" />
              </div>
            </div>
          </div>
          <div className="marketingCard">
            <img src={ComputerYellow} alt="" />
            <div className="descriptionCard3">
              <p>Revamping the Membership Model with Triathlon Australia</p>
              <div className="readCard">
                <a href="">Readmore</a>
                <img src={Arrow} alt="" />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="liberoContainer">
        <h1>
          Pellentesque suscipit <br />
          fringilla libero eu.
        </h1>
        <button>
          Get a Demo
          <img src={ArrowWhite} alt="" />
        </button>
      </section>

      <footer>
        <section className="footerContainer">
          <section className="footer">
            <div className="footerLogo">
              <img src={MainIcon} alt="" />
              <img src={NexcentWhite} alt="" />
            </div>
            <div className="footerDescription">
              <p>Copyright © 2020 Nexcent ltd. </p>
              <p>All rights reserved</p>
            </div>
            <section className="footerSocialmedia">
              <div className="footerIcons">
                <img src={Insta} alt="" />
              </div>
              <div className="footerIcons">
                <img src={Dribble} alt="" />
              </div>
              <div className="footerIcons">
                <img src={Twitter} alt="" />
              </div>
              <div className="footerIcons">
                <img src={Youtube} alt="" />
              </div>
            </section>
          </section>

          <section className="alignNav">
            <div className="ancora">
              <h1>Company</h1>
              <nav>
                <a href="">About us</a>
                <a href="">Blog</a>
                <a href="">Contact us</a>
                <a href="">Pricing</a>
                <a href="">Testimonials</a>
              </nav>
            </div>
            <div className="ancora">
              <h1>Support</h1>
              <nav>
                <a href="">Help center</a>
                <a href="">Terms of service</a>
                <a href="">Legal</a>
                <a href="">Privacy policy</a>
                <a href="">Status</a>
              </nav>
            </div>
            <div className="stayUp">
              <h1>Stay up to date</h1>
              <form>
                <input type="text" placeholder="Your email address"/>
                <img src={Send} alt="" />
              </form>
            </div>
          </section>
        </section>
      </footer>
    </div>
  );
}
