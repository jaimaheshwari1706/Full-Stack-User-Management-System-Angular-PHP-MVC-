<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

class TaskModel
{
  protected $db;
  protected $view;
  /**
   * Constructor, expects a Database connection
   * @param Database $db The Database object
   */
  public function __construct(Database $db)
  {
    $this->db = $db;
  }

  public function login($arr)
{
    $arr = json_decode($arr, true);
    $email = $arr[0]['email'];  
    $password = $arr[0]['password'];  

    $query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
    $result = $this->db->query($query);

     $result->fetch();
     if ($result->rowCount() > 0) {
      $data = true;
     } else {
       $data = false;
     }
     return $data;
    }

   



  public function getAllData()
  {
    // $data = array();
    $sql = "SELECT * FROM users";
    $result = $this->db->query($sql);

    if ($result->rowCount() > 0) {
      while ($row = $result->fetch()) {
        $data[] = $row;
      }
    }

    return $data;
  }

  public function getUsersGender($gender)
  {
    $data = [];
    $sql = "SELECT * FROM users where gender = ?";
    $result = $this->db->prepare($sql);
    $result->execute([$gender]);

    if ($result->rowCount() > 0) {
      while ($row = $result->fetch()) {
        $data[] = $row;
      }
    }

    return $data;
  }

  public function addData($arr)
  {
    $name = $arr[0]['name'];
    $email = $arr[0]['email'];
    $phone = $arr[0]['phone'];
    $password = $arr[0]['password'];
    $gender = $arr[0]['gender'];

    $query = "INSERT INTO users(name, email, phone, password, gender) VALUES (?,?,?,?,?)";
    $result = $this->db->prepare($query);
    $result->execute(array($name, $email, $phone, $password, $gender));

    return $result;
  }

  // public function getUserByEmail($email)
  // {
  //   $query = "SELECT * FROM users WHERE email = ?";
  //   $stmt = $this->db->prepare($query);
  //   $stmt->execute([$email]);
  //   return $stmt->fetch();
  // }



  public function getUserById($id)
  {
    $query = "SELECT * FROM users WHERE id = ?";
    $result = $this->db->prepare($query);
    $result->execute([$id]);
    $data = $result->fetch();

    return $data;
  }

  public function updateData($arr)
  {
    $name = $arr['name'];
    $email = $arr['email'];
    $phone = $arr['phone'];
    $password = $arr['password'];
    $gender = $arr['gender'];
    $id = $arr['id'];
    $query = $this->db->prepare("UPDATE users SET name = ?, email = ?, phone = ?, password = ?, gender = ? WHERE id = ?");
    $query->execute([$name, $email, $phone, $password, $gender, $id]);
    return $query;
  }

  public function deleteData($id)
  {
    $query = "DELETE FROM users WHERE id = ?";
    $result = $this->db->prepare($query);
    $result->execute(array($id));
    return $result;
  }
}
