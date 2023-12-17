<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Customer
 * 
 * @property string $User_id
 * @property string $User_name
 * @property string $User_type
 * @property string $User_password
 * 
 * @property BusinessOwner $business_owner
 * @property Collection|ChatBox[] $chat_boxes
 * @property Collection|Club[] $clubs
 * @property SchoolAdmin $school_admin
 * @property Student $student
 * @property SuperAdmin $super_admin
 *
 * @package App\Models
 */
class Customer extends Model
{
	protected $table = 'customer';
	protected $primaryKey = 'User_name';
	public $incrementing = false;
	public $timestamps = false;

	protected $hidden = [
		'User_password'
	];

	protected $fillable = [
		'User_id',
		'User_type',
		'User_password'
	];

	public function business_owner()
	{
		return $this->hasOne(BusinessOwner::class, 'User_name');
	}

	public function chat_boxes()
	{
		return $this->hasMany(ChatBox::class, 'receiver');
	}

	public function clubs()
	{
		return $this->hasMany(Club::class, 'owner_user_name');
	}

	public function school_admin()
	{
		return $this->hasOne(SchoolAdmin::class, 'User_name');
	}

	public function student()
	{
		return $this->hasOne(Student::class, 'User_name');
	}

	public function super_admin()
	{
		return $this->hasOne(SuperAdmin::class, 'User_name');
	}
}
