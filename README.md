# Tree godown inventory viewer


## Ideas
1) Added a login screen to autheticate users and store the data in localstorage.
2) Added a tree structure. Used a recursive component to build the tree struture. Added dropdown icons.
3) Added a modal to view the information of the product.
4) Search functionality to searh godowns:
    - Finds a godown via its name.
    - Adds the parents of the search godown (if exsists).
    - Adds the children of the search godown(if exsists).


## Setup instructions

### Clone the repo
    git clone https://github.com/Bikram-ghuku/Interiit_dev_task
    cd Interiit_dev_task

### Run Locally

1) Install [npm](https://www.npmjs.com/)
    ```shell
      npm install -g npm
    ```

2) Install the dependencies
    ```shell
      npm i
    ```

3) Run the dev server
    ```shell
      npm run dev
    ```

### Run using docker

1) Build or pull the docker image
    ```shell
      docker build -t bikramghuku05/inter_iit_dev .
    ```

    **Or**

    ```shell
      docker pull bikramghuku05/inter_iit_dev
    ```

2) Run the docker image
    ```shell
      docker run -p 3000:80 bikramghuku05/inter_iit_dev
    ```

## Using the application

1) Login credentials

    Username: user123 \
    Password: pswd123

## Deployment links

1) [AWS](http://13.201.0.120:3000/)

## Video Demonstration

1) [Drive Video](https://drive.google.com/file/d/1BF5Z7b_MbFUbQBbU9gHzFoH7aKLG6FHO/view?usp=sharing)