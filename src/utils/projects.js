import piano from "../assets/images/piano1.png";
import responsive from "../assets/images/responsive.png";
import noresponsive from "../assets/images/noresponsive.png";
import sharewe from "../assets/images/sharewe.png"
import cart from "../assets/images/cartSimpleExample.png"

const data = [
    {
        name: "WeShare! ",
        type: "WebApp",
        url: "/projects",
        github: "https://github.com/jvdelafuente/WeShare-FinalBootcampProject",
        image: sharewe,
        slug: "cart-management-system",
        description: "Final bootcamp project, This is a website that allows users to register, login, share links, view links from other users and like the links they like the most.",
        tech: ['HTML', 'Javascript', 'Css','Nodejs', 'React', 'MySql']
        
    },

    {
    name: "No responsive Portfiolio",
    type: "Website",
    url: "https://jvnoresponsiveporfolio.netlify.app",
    github: "https://github.com/jvdelafuente/ExamplePortfolioNoResponsive",
    image: noresponsive,
    slug: "lifeinsureease",
    description: "Funny portfolio design, build for 1750px screen, feel free to use it",
    tech: ['HTML', 'Javascript', 'Css', 'React' ]

},
            {
        name: "Shopping cart example",
        type: "Website",
        url: "https://jvcartexample.netlify.app",
        github: "https://github.com/jvdelafuente/cartSimpleExample",
        image: cart,
        slug: "lifeinsureease",
        description: "Minimalist shopping cart design",
        tech: ['HTML', 'Javascript', 'Css' ]

    },
        {
        name: "Responsive Portfolio",
        type: "Website",
        url: "https://jvresponsiveportfolio.netlify.app",
        github: "https://github.com/jvdelafuente/ExamplePortfolioResponsive",
        image: responsive,
        slug: "lifeinsureease",
        description: "Portfolio example for ideas, feel free to use it",
        tech: ['HTML', 'Javascript', 'Sass', 'React' ]
    },
        {
        name: "My piano",
        type: "Website",
        url: "https://main--jvmypiano.netlify.app",
        github: "https://github.com/jvdelafuente/MyPiano",
        image: piano,
        slug: "lifeinsureease",
        description: "Simple piano game",
        tech: ['HTML', 'Javascript', 'Css' ]

    },

]

export function getData(){
    return data;
}