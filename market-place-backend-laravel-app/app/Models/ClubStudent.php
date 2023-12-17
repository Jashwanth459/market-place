<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class ClubStudent
 * 
 * @property string $club_id
 * @property string $st_user_name
 * @property Carbon|null $st_joined_date
 * 
 * @property Club $club
 * @property Student $student
 *
 * @package App\Models
 */
class ClubStudent extends Model
{
	protected $table = 'club_students';
	public $incrementing = false;
	public $timestamps = false;

	protected $dates = [
		'st_joined_date'
	];

	protected $fillable = [
		'st_joined_date'
	];

	public function club()
	{
		return $this->belongsTo(Club::class);
	}

	public function student()
	{
		return $this->belongsTo(Student::class, 'st_user_name');
	}
}
