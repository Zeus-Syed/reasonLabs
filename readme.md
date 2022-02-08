Back-end
     - clone the repo (or) unzip the file
     - npm i
     - npm start

     - hit:  http://localhost:4000/orders to see local logs of pipeline.
     - final report will be stored in mongoDb DB 
         db --> 'reason' 
         collection --> 'orders'

Docker
     - create a docker image
          docker build -t reason_labs .
     - run the image
          docker run -it -p 4000:4000 reason_labs

         