import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';
import { LandingComponent } from './components/landing/landing.component';
import { PublicMediaBoardComponent } from './components/public-media-board/public-media-board.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';
import { ImageEditorComponent } from './components/image-editor/image-editor.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccountComponent } from './components/account/account.component';
import { CodeComponent } from './components/code/code.component';
import { FolderCreationComponent } from './components/folder-creation/folder-creation.component';
import { MusicComponent } from './components/music/music.component';
import { PhotosComponent } from './components/photos/photos.component';
import { TotalComponent } from './components/total/total.component';
import { UploadingComponent } from './components/uploading/uploading.component';
import { VideoComponent } from './components/video/video.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ModalsComponent } from './components/modals/modals.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    LandingComponent,
    PublicMediaBoardComponent,
    PhotoDetailComponent,
    ImageEditorComponent,
    SidebarComponent,
    AccountComponent,
    CodeComponent,
    FolderCreationComponent,
    MusicComponent,
    PhotosComponent,
    TotalComponent,
    UploadingComponent,
    VideoComponent,
    TopbarComponent,
    ModalsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    SidebarComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }