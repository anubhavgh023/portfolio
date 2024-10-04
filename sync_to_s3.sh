# Set the S3 bucket name and the local directory to sync
S3_BUCKET="anubhavsamanta.tech"
LOCAL_DIR="/home/anubhav/Development/portfolio"

# Sync local directory to S3 bucket
echo "Syncing $LOCAL_DIR to s3://$S3_BUCKET..."
aws s3 sync "$LOCAL_DIR" s3://"$S3_BUCKET" --delete --acl public-read