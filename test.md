Tentu! Berikut ini adalah dokumentasi *endpoint* untuk API Autentikasi Sederhana dalam bahasa Indonesia.

---

# Dokumentasi *Endpoint* API Autentikasi Sederhana

API ini menyediakan autentikasi pengguna menggunakan JWT (*JSON Web Token*) dan terdiri dari fitur-fitur berikut:

### BASE URL

        http://147.139.166.183:5000

1. **Pendaftaran Pengguna**
2. **Login Pengguna**
3. **Akses Rute Terproteksi**

## Daftar *Endpoint*

### 1. Pendaftaran Pengguna

- **Endpoint**: `/register`
- **Metode**: `POST`
- **Deskripsi**: Mendaftarkan pengguna baru dengan nama pengguna dan kata sandi.
- **Badan Permintaan**:
    - `username` (string, wajib) - Nama pengguna untuk pengguna baru.
    - `password` (string, wajib) - Kata sandi untuk pengguna baru.
- **Respon**:
    - **201 Created**: Pengguna berhasil didaftarkan.
        ```json
        { "message": "User registered successfully" }
        ```
    - **400 Bad Request**: Nama pengguna atau kata sandi tidak ada, atau pengguna sudah ada.
        ```json
        { "message": "Username and password are required" }
        ```
        atau
        ```json
        { "message": "User already exists" }
        ```

#### Contoh Permintaan

```bash
curl -X POST http://147.139.166.183:5000/register \
-H "Content-Type: application/json" \
-d '{
  "username": "exampleUser",
  "password": "examplePass"
}'
```

---

### 2. Login Pengguna

- **Endpoint**: `/login`
- **Metode**: `POST`
- **Deskripsi**: Login pengguna dan mengambil token JWT.
- **Badan Permintaan**:
    - `username` (string, wajib) - Nama pengguna.
    - `password` (string, wajib) - Kata sandi pengguna.
- **Respon**:
    - **200 OK**: Login berhasil, mengembalikan token JWT.
        ```json
        { "token": "<jwt_token>" }
        ```
    - **401 Unauthorized**: Nama pengguna atau kata sandi tidak valid.
        ```json
        { "message": "Invalid username or password" }
        ```

#### Contoh Permintaan

```bash
curl -X POST http://147.139.166.183:5000/login \
-H "Content-Type: application/json" \
-d '{
  "username": "exampleUser",
  "password": "examplePass"
}'
```

---

### 3. Akses Rute Terproteksi

- **Endpoint**: `/protected`
- **Metode**: `GET`
- **Deskripsi**: Mengakses rute terproteksi dengan memberikan token JWT yang valid.
- **Header**:
    - `Authorization`: Bearer `<jwt_token>`
- **Respon**:
    - **200 OK**: Akses diberikan ke rute terproteksi.
        ```json
        { "message": "Hello <username>, you accessed a protected route!" }
        ```
    - **401 Unauthorized**: Token tidak ada atau tidak valid.
        ```json
        { "message": "Access denied" }
        ```
    - **400 Bad Request**: Token tidak valid.
        ```json
        { "message": "Invalid token" }
        ```

#### Contoh Permintaan

```bash
curl -X GET http://147.139.166.183:5000/protected \
-H "Authorization: Bearer <jwt_token>"
```

--- 

Semoga dokumentasi ini membantu untuk menggunakan *endpoint* API autentikasi sederhana ini!
