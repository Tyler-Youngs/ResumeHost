# ResumeHost
Edited test text
The sample backend was created using the react pre made application and the command
```
npx create-react-app my-app
```
This requires node version 14+

To manage node versions I'd reccomend installing the [node version manager](https://github.com/nvm-sh/nvm) (nvm).

After installation use the below snippet to get and use node v14
```
nvm install 14
```
Set node version default
```
nvm alias default v14.18.3
```
Install yarn for front end work
```
npm install --global yarn
```
After pulling, change directories into the resume-app and run the following command to install dependencies
```yarn```

I had trouble getting this to wrok on the pi. I used [this link](https://stackoverflow.com/questions/53471063/yarn-error-there-are-no-scenarios-must-have-at-least-one) to get yarn working on the pi.
<br><br>
For development, use the below command to locally serve the files you're editing
```
yarn start
```
For builds on the pi, run 
```
yarn run build
```
To add packages used in the build, use yarn to ensure the package is added to the package.json
```
yarn add <package>
```


 
