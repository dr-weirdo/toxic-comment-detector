# toxic-comment-detector

## How to run this project

You need a linux machine of x86 architecture to run this project.

### 1. Install Node Modules

Navigate to `client` and `server` directory of this project and run this command separately:

```yarn```

Yarn have to be installed globally on your machine.

### 2. Add Python Virtual Environment

Navigate to the `server` directory of the project. After that, run the following command:

```python3 -m venv .pyvenv```

Make sure you have Python 3 installed on your machine.

### 3. Add the trained Tensorflow model to the project

Download the trained model as a .zip file from [this link](https://drive.google.com/file/d/1PEsU_tcSVeeQlb5kLa2alCnBxqJ6YieD/view?usp=share_link), unzip it and put it in the `/server/pyscripts` directory. Rename the folder as `.model`.

### 4. Start backend and frontend servers

Open two different terminal windows in the root directory of this project. In terminal 1, navigate to `client` directory and run:

`yarn start`

In terminal 2, navigate to `server` and run:

`nodemon index.js`

Make sure that you have nodemon installed globally on your machine.
