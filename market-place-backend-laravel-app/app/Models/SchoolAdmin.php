<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class SchoolAdmin
 * 
 * @property string $s_id
 * @property string $User_name
 * @property string $FName
 * @property string|null $LName
 * @property string|null $Mobile
 * @property string|null $Mail_id
 * @property string|null $Address
 * @property string|null $school_name
 * @property string|null $sua_user_name
 * 
 * @property Customer $customer
 * @property SuperAdmin|null $super_admin
 * @property Collection|BusinessOwner[] $business_owners
 * @property Collection|Student[] $students
 *
 * @package App\Models
 */
class SchoolAdmin extends Model
{
	protected $table = 'school_admin';
	protected $primaryKey = 'User_name';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		's_id',
		'FName',
		'LName',
		'Mobile',
		'Mail_id',
		'Address',
		'school_name',
		'sua_user_name'
	];

	public function customer()
	{
		return $this->belongsTo(Customer::class, 'User_name');
	}

	public function super_admin()
	{
		return $this->belongsTo(SuperAdmin::class, 'sua_user_name');
	}

	public function business_owners()
	{
		return $this->hasMany(BusinessOwner::class, 's_user_name');
	}

	public function students()
	{
		return $this->hasMany(Student::class, 's_user_name');
	}
}
