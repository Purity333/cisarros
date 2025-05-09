
from django.contrib import admin
from django.urls import path, include
# dos librerias  recien añadido para subir fotos 
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('apix/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('apix/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)




#if settings.DEBUG:
#    urlpatterns+=static(static.MEDIA_URL, document_root=settings.MEDIA_ROOT)