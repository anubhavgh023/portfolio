#!/bin/bash

echo "==== Pushing to aws s3 bucket ===\"
aws s3 sync ./out s3://anubhavsamanta.tech
