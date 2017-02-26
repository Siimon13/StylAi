from clarifai.rest import ClarifaiApp
import urllib2
from bs4 import BeautifulSoup

client_id = "TMWN2VTpC-gVCqsQM8etnUXRoEYJwFdeK7R0L589"
client_secret = "XgqM1Hle2TY7NEZ0PPKS3op02X2RkCrbfegbr3vS"

app = ClarifaiApp(client_id, client_secret)

# get the general model
# model = app.models.get("general-v1.3")

# predict with the model
# model.predict_by_url(url='https://samples.clarifai.com/metro-north.jpg')     

# app.inputs.create_image_from_url(url="https://s3cdn-lookbooknu.netdna-ssl.com/files/looks/small/2017/01/11/5102451_IMG_20170111_123449_004.jpg?1484160571", concepts=['women'])
 
url = "http://lookbook.nu/search?q=goth"
headers = { 'User-Agent' : 'Mozilla/5.0' }

req = urllib2.Request(url, None, headers)
html = urllib2.urlopen(req)
soup = BeautifulSoup(html, "html.parser")

allimg = soup.find_all("a",{"class":"image"})

mencasual = []

for img in allimg:
    mencasual.append(img.find("img")["src"].replace("//","").strip())
    
mencasual = set(mencasual)



for img in mencasual:
    img = "https://"+img
    print img
    try:
        app.inputs.create_image_from_url(url=str(img))
        print "Work!"
    except:
        print "Failed..."
        pass
    # print img
    
    # appimg = app.inputs.create_image_from_url(img)



