from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
#https://www.django-rest-framework.org/api-guide/authentication/
#https://coffeebytes.dev/es/django-rest-framework-y-jwt-para-autenticar-usuarios/
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        print("user:",user)
        token = super().get_token(user)
        print("token:",token)

        # Add custom claims
        token['name'] = user.username
        token['rol'] = "Esto es una prueba"
        token['pregunta1'] = "Esto es una prueba 1"
        token['pregunto2'] = "Esto es una prueba 2"
        # ...
        print("token Ultimo:",token)
        return token