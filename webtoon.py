import requests
import io
from PIL import Image

API_URL = "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud"
headers = {
	"Accept": "image/png",
	"Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
	"Content-Type": "application/json"
}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload, verify=False)
	print(response.status_code)
	return response.content


image_bytes = query({
	"inputs": "Cat swimming in a pool"
})
# You can access the image with PIL.Image for example
print(image_bytes)
image = Image.open(io.BytesIO(image_bytes))
image.save('out.png')