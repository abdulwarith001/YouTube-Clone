const homepageDatabase = [
  { thumbnailImg: 'image/homepage/thumbnail1.png', channelImg: 'image/Channels-image/img1.png', videoTitle: 'WHEN LIFE BREAKS YOU- Powerful Motivational Speech', channelsName: 'Ben Lionel Scott', views: '13M views', timeOfPosting: '1 year ago' },
  { thumbnailImg: 'image/homepage/thumbnail3.png', channelImg: 'image/Channels-image/img9.png', videoTitle: 'Funniest Cat and Dogs 😂😂 Part 1', channelsName: 'Cute Hub', views: '4.3M views', timeOfPosting: '10 months ago' },
  { thumbnailImg: 'image/homepage/thumbnail8.png', channelImg: 'image/Channels-image/img2.png', videoTitle: 'YOU WONT BELIEVE  how this Dog transforms after shaving all these dreadlocks', channelsName: 'Groom House', views: '19M views', timeOfPosting: '2 months ago' },
  { thumbnailImg: 'image/homepage/thumbnail9.png', channelImg: 'image/Channels-image/img3.png', videoTitle: 'MUMU MAN VISITS MR MACARONI | SABINUS | MUMMY WA | CEECEE FLEEK', channelsName: 'MR MACARONI', views: '1.1M views', timeOfPosting: '6 months ago' },
  { thumbnailImg: 'image/homepage/thumbnail10.png', channelImg: 'image/Channels-image/img4.png', videoTitle: "'There is no business here. This is called 419!' - Paul Onwenibe Rips Into This Entrepreneur", channelsName: 'Ultimate NG', views: '1.9M views', timeOfPosting: '9 months ago' },
  { thumbnailImg: 'image/homepage/thumbnail11.png', channelImg: 'image/Channels-image/img5.png', videoTitle: '10 CSS Pro Tips -CODE THIS, NOT THAT', channelsName: 'Fireship', views: '1M views', timeOfPosting: '1 year ago' },
  { thumbnailImg: 'image/homepage/thumbnail12.png', channelImg: 'image/Channels-image/img6.png', videoTitle: 'Complete Responsive Food / Resturant Website Using HTML CSS & JavaScript', channelsName: 'Tahmid Ahmed', views: '1.1K views', timeOfPosting: '1 day ago' },
  { thumbnailImg: 'image/homepage/thumbnail13.png', channelImg: 'image/Channels-image/img7.png', videoTitle: 'Blake Challenges Bolt in 2012 | I AM BOLT', channelsName: 'DocBusters', views: '15M views', timeOfPosting: '2 years ago' }
  ,
  { thumbnailImg: 'image/homepage/thumbnail15.png', channelImg: 'image/Channels-image/img8.png', videoTitle: 'What If The Earth Stops Spinning For 5 seconds?', channelsName: 'What If', views: '3.3M views', timeOfPosting: '6 months ago' }
]

const downloadDatabase = [
  {thumbnailImg: 'image/Downloads/thumbnail1.png', videoTitle: 'How to use Font Awesome Icon on HTML project 2022', channelsName: 'Davehenzy Tech'},
  {thumbnailImg: 'image/Downloads/thumbnail2.png', videoTitle: 'Guide To Becoming A Self Taught Software', channelsName: 'Traversy Media'},
  {thumbnailImg: 'image/Downloads/thumbnail3.png', videoTitle: 'Tailwind Crash Course | Project From Scratch', channelsName: 'Traversy Media'},
  {thumbnailImg: 'image/Downloads/thumbnail4.png', videoTitle: 'Text to speech & Synthesis App - JavaScript & Web speech', channelsName: 'Traversy Media'},
  {thumbnailImg: 'image/Downloads/thumbnail5.png', videoTitle: 'Food Recipe App using API | Vanilla JS Project', channelsName: 'GeekProbin'},
  {thumbnailImg: 'image/Downloads/thumbnail6.png', videoTitle: 'Git Tutorial For Beginners 2022 | Git & Github Complete Tutorial', channelsName: 'Simplilearn'},
  {thumbnailImg: 'image/Downloads/thumbnail7.png', videoTitle: 'Getting Started with Three.JS', channelsName: 'Traversy Media'},
  {thumbnailImg: 'image/Downloads/thumbnail8.png', videoTitle: 'Quick & Easy CSS Loaders', channelsName: 'Traversy Media'},
  {thumbnailImg: 'image/Downloads/thumbnail9.png', videoTitle: 'JavaScript Shopping Cart Tutorial for Beginners', channelsName: 'Web Dev Simplified'},
  {thumbnailImg: 'image/Downloads/thumbnail10.png', videoTitle: 'Create a Weather APP Using JavaScript, HTML and CSS', channelsName: 'Code Explained'},
  {thumbnailImg: 'image/Downloads/thumbnail11.png', videoTitle: 'Asynchronous Javascript & Event loop from Scratch', channelsName: 'Akshay Saini'},
  {thumbnailImg: 'image/Downloads/thumbnail12.png', videoTitle: 'Storing objects with Local Storage in JavaScript', channelsName: 'dcode'},
  {thumbnailImg: 'image/Downloads/thumbnail13.png', videoTitle: 'Node JS Full Course 2022 | Learn Node JS in 4 hours', channelsName: 'Simplilearn'},
  {thumbnailImg: 'image/Downloads/thumbnail14.png', videoTitle: 'Node and Express Tutorial', channelsName: 'Coding Addict'},
  {thumbnailImg: 'image/Downloads/thumbnail15.png', videoTitle: 'Host Your Website For Free Tutorial', channelsName: 'Dev Ed'},
  {thumbnailImg: 'image/Downloads/thumbnail16.png', videoTitle: 'Deploy Websites in seconds With Netlify', channelsName: 'Traversy Media'},
  {thumbnailImg: 'image/Downloads/thumbnail17.png', videoTitle: 'Random Joke Generator | HTML, CSS & JavaScript Project', channelsName: 'Coding Artist'},
  {thumbnailImg: 'image/Downloads/thumbnail18.png', videoTitle: 'Dicionary App | HTML, CSS And JavaScript | JS Project', channelsName: 'Coding Artist'},
  {thumbnailImg: 'image/Downloads/thumbnail19.png', videoTitle: 'Using Video As Text Background | Clip Path', channelsName: 'Coding Artist'},
  {thumbnailImg: 'image/Downloads/thumbnail20.png', videoTitle: 'Random Quote Generator | JavaScript API Project', channelsName: 'Coding Artist'},
  {thumbnailImg: 'image/Downloads/thumbnail21.png', videoTitle: 'Build A Weather App With Vanilla JavaScript Tutorial', channelsName: 'Dev Ed'},
  {thumbnailImg: 'image/Downloads/thumbnail22.png', videoTitle: 'Learn Fetch API in 6 minutes', channelsName: 'Web Dev Simplified'},
  {thumbnailImg: 'image/Downloads/thumbnail23.png', videoTitle: 'JavaScript Form Validation', channelsName: 'Web Dev Simplified'},
  {thumbnailImg: 'image/Downloads/thumbnail24.png', videoTitle: 'JavaScript Object | Classes and Objects in JavaScipt', channelsName: 'edureka'},
  {thumbnailImg: 'image/Downloads/thumbnail25.png', videoTitle: 'Async + Await in JavaScript, talk from Wes Bos', channelsName: 'freecodecamp.org'},
  {thumbnailImg: 'image/Downloads/thumbnail26.png', videoTitle: 'Tips For Using Async/Await in JavaScript', channelsName: 'James Q Quick'},
  {thumbnailImg: 'image/Downloads/thumbnail27.png', videoTitle: 'Asynchronous Vs Synchronous Programming', channelsName: 'Web Dev Simplified'},
  {thumbnailImg: 'image/Downloads/thumbnail28.png', videoTitle: 'How to learn Code FAST (Do this or Keep Struggling)', channelsName: 'Andy Sterkowitz'},
  {thumbnailImg: 'image/Downloads/thumbnail29.png', videoTitle: 'Node.js Ultimate Beginners Guide in 7 easy Steps', channelsName: 'Fireship'},
  {thumbnailImg: 'image/Downloads/thumbnail30.png', videoTitle: 'Asynchronous Javscript Course (Async/Await)', channelsName: 'Freecodecamp.org'},
  {thumbnailImg: 'image/Downloads/thumbnail31.png', videoTitle: 'USIAN BOLTS LAST RUN | IT WILL MAKE YOU CRY', channelsName: 'We can'},
  {thumbnailImg: 'image/Downloads/thumbnail32.png', videoTitle: 'Node.js Tutorial for beginners: Learn Node in 1 hour', channelsName: 'Programming with Mosh'}
]

const container = document.getElementById('container')
const homeTab = document.getElementById('homeTab')
const downloadTab = document.getElementById('downloadTab')
const channelsHeader = document.querySelector('#channelsHeader')
const customMsg = document.querySelector('#customMsg')
let isHomepageOpen = true;
let isDownloadpageOpen = false;

//Selecting the dom of the homepage templates
const cloneHomepageTemplate = document.getElementById('homepageTemplate')
const cloneDownloadTemplate = document.getElementById('downloadTemplate')
const clonePreviewTemplate = document.getElementById('previewTemplate')

const getHomepage = () => {
  channelsHeader.style.display = 'flex'
  customMsg.textContent = 'Videos added 2 hours ago'
  if (isHomepageOpen) {
    container.innerHTML = ''
    homepageDatabase.forEach((data) => {
      displayHomePage(data)
    })
    isHomepageOpen = false
    isDownloadpageOpen = true
  } else {
    window.scrollTo(0, 0)
  }
}

const getDownloadPage = () => {
  customMsg.textContent = 'Pull down to scan storage'
  channelsHeader.style.display = 'none'
  if (isDownloadpageOpen) {
    isHomepageOpen = true
    isDownloadpageOpen = false
    container.innerHTML = ''
    downloadDatabase.forEach((data) => {
      displayDownloadPage(data)

    })
  } else {
    window.scrollTo(0, 0)
  }
}

function displayHomePage(data) {
  homeTab.classList.add('active')
  homeTab.classList.remove('inactive')
  downloadTab.classList.add('inactive')
  downloadTab.classList.remove('active')
  container.classList.add('animeRight')
  setTimeout(() => {
    container.classList.remove('animeRight')
  }, 800)
  const homepageTemplate = cloneHomepageTemplate.content.cloneNode(true).children[0]
  const requiredData = homepageTemplate.querySelectorAll('#requiredData');

  requiredData[0].src = data.thumbnailImg
  requiredData[1].src = data.channelImg
  requiredData[2].textContent = data.videoTitle
  requiredData[3].textContent = data.channelsName
  requiredData[4].textContent = data.views
  requiredData[5].textContent = data.timeOfPosting

  homepageTemplate.addEventListener('click', addError)
  container.append(homepageTemplate)
}

function displayDownloadPage(data) {
  downloadTab.classList.add('active')
  downloadTab.classList.remove('inactive')
  homeTab.classList.add('inactive')
  homeTab.classList.remove('active')
  container.classList.add('animeLeft')
  setTimeout(() => {
    container.classList.remove('animeLeft')
  }, 800)
  const downloadTemplate = cloneDownloadTemplate.content.cloneNode(true).children[0]
  const requiredData = downloadTemplate.querySelectorAll('#required')

  requiredData[0].src = data.thumbnailImg
  requiredData[1].textContent = data.videoTitle
  requiredData[2].textContent = data.channelsName
  downloadTemplate.addEventListener('click', addError)

  container.append(downloadTemplate)
  // console.log(downloadTemplate);
}

const errorBox = document.getElementById('errorBox')
const strollTop = document.getElementById('strollTop')

function addError() {
  errorBox.style.display = 'flex'
}

function hide() {
  errorBox.style.display = 'none'
}

const preloader = document.getElementById('preloader')
function removePreloader(){
  setTimeout(()=>{
    preloader.classList.toggle('removePreload')
  },2000)
}
removePreloader()
//adding various event listeners
homeTab.addEventListener('click', getHomepage)
downloadTab.addEventListener('click', getDownloadPage)
window.addEventListener('load', getHomepage)
errorBox.addEventListener('click', hide)
strollTop.addEventListener('click', () => {
  window.scrollTo(0, 0)
})