AWS Task 3 – Kubernetes Deployment
Project Overview

This project demonstrates deploying a Flask frontend and Express backend on a local Kubernetes cluster using Minikube, with Docker images hosted on Docker Hub.

Prerequisites

Before you begin, ensure you have the following installed:

Docker Desktop

Minikube

kubectl

Docker Hub account (for pulling images)

Steps Followed

Set up Minikube environment

minikube start


Build Docker images locally

docker build -t your-dockerhub-username/flask-frontend:latest ./frontend
docker build -t your-dockerhub-username/express-backend:latest ./backend


Push Docker images to Docker Hub

docker push your-dockerhub-username/flask-frontend:latest
docker push your-dockerhub-username/express-backend:latest


Create Kubernetes deployment and service files

frontend-deployment.yaml

backend-deployment.yaml

frontend-service.yaml

backend-service.yaml

In the deployment YAMLs, specify your Docker Hub image URLs, e.g.:

image: your-dockerhub-username/express-backend:latest


Deploy backend and frontend to Kubernetes

kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml
kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml


Verify pods and services

kubectl get pods
kubectl get svc


Access the frontend

minikube service frontend

Notes

Ensure Docker Desktop is running and logged in to Docker Hub while pushing images.

You can check pod logs if anything fails:

kubectl logs <pod-name>


This setup uses Docker Hub images, so Kubernetes pulls the images from your Docker Hub account rather than building locally.
