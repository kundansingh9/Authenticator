from django.urls import path
from .views import home_page, login_page, profile, register, register_page
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('', login_page),
    path('register-page/', register_page),
    path('register/', register),
    path('login/', TokenObtainPairView.as_view()), 
    path('profile/', profile),
    path('home/', home_page)
]