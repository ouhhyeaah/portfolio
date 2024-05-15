# Louis Petitperrin's Portfolio.

## Project Stack

I'm using Vue.js and Vite

<div style="display:flex; gap:30px; justify-content:center; align-items:center">
	<figure style="display:flex; flex-direction: column; justify-content:center; text-align:center">
	    <img src="https://camo.githubusercontent.com/0b17e5a01574a2c1251b51c910c422f6ca6cb968a52686a770b668a634792c09/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67" width="200">
	    <figcaption style="just">Vue.js</figcaption>
	</figure>
		<span style="font-size:50px;">+</span>
	<figure style="display:flex; flex-direction: column; justify-content:center; text-align:center">
	    <img src="https://camo.githubusercontent.com/2e1efd50b61f26c56e82929d735dce115937350e280abac98641c79d765da27c/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667" alt="Icon Vite" width="200">
	    <figcaption style="just">Vite</figcaption>
	</figure>

</div>

Why did I choose these technologies ? Because I like to learn new things.

And regarding the back-end side, no need in this project. All the data that I need are presents in the src/data folder. At first I was using a Firebase database. But when I started to implement everything, I didn't see much benefit in storing the data (which is light, and in very small quantities) in an external database.

## Deployment

Concerning the deployment, I'm using a Github Action, and gh-pages. This allows me to deploy and update my site by making a commit in my repository. I use an NPM command to automate this.

```json
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
```
