<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Article;
use App\Models\Category;
class AdminController extends Controller
{
    //
  use  AuthenticatesUsers ;



    public function checkadminlogin(Request $request)
    {

        //  validate for Login Admin form
              $request->validate([
                 'email' => 'required|email',
                  'password' => 'required|min:6'
                 ]);

                //  if Admin is has guard Admin ( register in admins Table ) will lOgin in dashboard
                if(Auth::guard('admin')->attempt(['email' => $request->email , 'password' => $request->password])){
                    return redirect()->route('dashboard');
                }
                else{
                return redirect('/admin')->withInput($request->only('email'))->with('error','You Are not have permisstion to login this Page');
                }
    }

    public function  AdminDashboard()
    {
        return view('admin.dashboard');
    }
    
     public function logout()
     {
        Auth::guard('admin')->logout();
        return redirect('/admin');
    }


}
