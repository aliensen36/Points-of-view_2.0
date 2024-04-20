from rest_framework import generics
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class SendIdeaListCreateView(generics.ListCreateAPIView):
    queryset = Send_idea.objects.all()
    serializer_class = SendIdeaSerializer

    def post(self, request, *args, **kwargs):
        serializer = SendIdeaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SendIdeaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Send_idea.objects.all()
    serializer_class = SendIdeaSerializer
    lookup_field = 'id'

class EnglishContentView(APIView):
    def get(self, request):
        content = EnglishContent.objects.all()
        serializer = EnglishContentSerializer(content, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = EnglishContentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)









# def index_ru(request):
#     if request.method == 'POST':
#         form = Send_idea_rutForm(request.POST)
#         if form.is_valid():
#             name = form.cleaned_data['name']
#             phone = form.cleaned_data['phone']
#             email = form.cleaned_data['email']
#             message = form.cleaned_data['message']
#             form = form.save(commit=False)
#             form.save()
#             return redirect('success_ru')
#     else:
#         form = Send_idea_rutForm()
#     return render(request, 'index_ru.html', {'form': form})
#
# def index_en(request):
#     if request.method == 'POST':
#         form = Send_idea_entForm(request.POST)
#         if form.is_valid():
#             name = form.cleaned_data['name']
#             phone = form.cleaned_data['phone']
#             email = form.cleaned_data['email']
#             message = form.cleaned_data['message']
#             form = form.save(commit=False)
#             form.save()
#             return redirect('success_en')
#     else:
#         form = Send_idea_entForm()
#     return render(request, 'index_en.html', {'form': form})
#
#
# def index_fr(request):
#     if request.method == 'POST':
#         form = Send_idea_frtForm(request.POST)
#         if form.is_valid():
#             name = form.cleaned_data['name']
#             phone = form.cleaned_data['phone']
#             email = form.cleaned_data['email']
#             message = form.cleaned_data['message']
#             form = form.save(commit=False)
#             form.save()
#             return redirect('success_fr')
#     else:
#         form = Send_idea_frtForm()
#     return render(request, 'index_fr.html', {'form': form})
#
#
# def success_ru(request):
#     return render(request, 'success_ru.html')
#
# def success_en(request):
#     return render(request, 'success_en.html')
#
# def success_fr(request):
#     return render(request, 'success_fr.html')
