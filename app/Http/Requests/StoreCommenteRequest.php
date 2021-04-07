<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCommenteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'form.body' => 'required|min:3'
        ];
    }


    public function messages()
    {
        return [
            'form.body.required' => 'Write thing in your Comment.',
            'form.body.min' => 'The Comment must be at least 3 characters.',
        ];
    }
}
