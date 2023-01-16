#!/bin/bash

ssh-keygen -t rsa -b 4096 -C "zhang001221@gmail.com"

eval $(ssh-agent -s)

ssh-add ~/.ssh/id_rsa

pbcopy < ~/.ssh/id_rsa.pub
