from clarifai.rest import ClarifaiApp
from pprint import pprint

client_id = "TMWN2VTpC-gVCqsQM8etnUXRoEYJwFdeK7R0L589"
client_secret = "XgqM1Hle2TY7NEZ0PPKS3op02X2RkCrbfegbr3vS"
StyAiconcepts = ['arty','business','casual','chic','elegant','female','goth','preppy','streetwear']

app = ClarifaiApp(client_id, client_secret)

query = app.inputs.search_by_predicted_concepts(concepts=['men','boot'])


print len(query)

for q in query:
    # model = app.models.get("general-v1.3")
    pprint(vars(q))
    print
    # raw_input()

