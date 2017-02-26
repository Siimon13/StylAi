from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from clarifai.rest import ClarifaiApp
from pprint import pprint
from random import shuffle

client_id = "TMWN2VTpC-gVCqsQM8etnUXRoEYJwFdeK7R0L589"
client_secret = "XgqM1Hle2TY7NEZ0PPKS3op02X2RkCrbfegbr3vS"
StylAiconcepts = ['arty','business','casual','chic','elegant','female','goth','preppy','streetwear']

app = ClarifaiApp(client_id, client_secret)

# Create your views here.

def hexColorDelta(hex1,hex2):
    r1 = int(hex1[1:3],16)
    g1 = int(hex1[3:5],16)
    b1 = int(hex1[5:7],16)

    r2 = int(hex2[1:3],16)
    g2 = int(hex2[3:5],16)
    b2 = int(hex2[5:7],16)

    r = 255 - math.abs(r1-r2)
    g = 255 - math.abs(g1-g2)
    b = 255 - math.abs(b1-b2)

    r /= 255
    g /= 255
    b /= 255

    return (r + g + b + 0.0) / 3

@csrf_exempt 
def index(request):
    message = ""
    if request.method == 'POST':
        data = request.POST
        # print data
        gender = "men" if data["gender"] == "Male" else "female"
        concepts =  [data["style"].lower()] + [gender] if gender == "men" else [data["style"].lower()] + [gender, "women", "girl"]
        print concepts
        query = app.inputs.search_by_predicted_concepts(concepts=concepts, values=[True,True])
        colormodel = app.models.get("color")
        genmodel = app.models.get("general-v1.3")
        info = []

        # shuffle(query)
        
        for q in query[:3]:        

            predict = colormodel.predict([q])
            if len(predict["outputs"][0]["data"]["colors"]) > 2:
                info.append({
                    "src" : predict["outputs"][0]["input"]["data"]["image"]["url"],
                    "color1" : predict["outputs"][0]["data"]["colors"][0]["raw_hex"],
                    "color2" : predict["outputs"][0]["data"]["colors"][1]["raw_hex"],
                    "color3" : predict["outputs"][0]["data"]["colors"][2]["raw_hex"]
                })
            else:
                info.append({
                    "src" : predict["outputs"][0]["input"]["data"]["image"]["url"],
                    "color1" : predict["outputs"][0]["data"]["colors"][0]["raw_hex"],
                    "color2" : predict["outputs"][0]["data"]["colors"][1]["raw_hex"],
                    "color3" : "black" })
                
        
        print info
        context  = {'info' : info , 'message': message, 'concepts': data["style"].lower()}
        template = 'results.html'
        return render(request, template, context)

        
    return render(request, 'index.html')

