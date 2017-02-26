from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from clarifai.rest import ClarifaiApp
from pprint import pprint

client_id = "TMWN2VTpC-gVCqsQM8etnUXRoEYJwFdeK7R0L589"
client_secret = "XgqM1Hle2TY7NEZ0PPKS3op02X2RkCrbfegbr3vS"
StylAiconcepts = ['arty','business','casual','chic','elegant','female','goth','preppy','streetwear']

app = ClarifaiApp(client_id, client_secret)

# Create your views here.

@csrf_exempt 
def index(request):
    message = ""
    if request.method == 'POST':
        data = request.POST
        # print data
        concepts = data.getlist("concepts") + [data["gender"]]
        print concepts
        query = app.inputs.search_by_predicted_concepts(concepts=concepts)
        model = app.models.get("color")
        info = []
        for q in query[:6]:
            pprint(model.predict([q]))
        context  = {'info' : info , 'message': message}
        template = 'results.html'
        return render(request, template, context)

        
    return render(request, 'index.html')

