using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using salesCRMWebApi.Models;

namespace salesCRMWebApi.Controllers
{
    public class usersAccountsController : ApiController
    {
        private GatewaySalesCRMEntities db = new GatewaySalesCRMEntities();

        // GET: api/usersAccounts
        public IQueryable<usersAccount> GetusersAccounts()
        {
            return db.usersAccounts;
        }

        // GET: api/usersAccounts/5
        [ResponseType(typeof(usersAccount))]
        public IHttpActionResult GetusersAccount(int id)
        {
            usersAccount usersAccount = db.usersAccounts.Find(id);
            if (usersAccount == null)
            {
                return NotFound();
            }

            return Ok(usersAccount);
        }

        // PUT: api/usersAccounts/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutusersAccount(int id, usersAccount usersAccount)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != usersAccount.id)
            {
                return BadRequest();
            }

            db.Entry(usersAccount).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!usersAccountExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/usersAccounts
        [ResponseType(typeof(usersAccount))]
        public IHttpActionResult PostusersAccount(usersAccount usersAccount)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.usersAccounts.Add(usersAccount);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = usersAccount.id }, usersAccount);
        }

        // DELETE: api/usersAccounts/5
        [ResponseType(typeof(usersAccount))]
        public IHttpActionResult DeleteusersAccount(int id)
        {
            usersAccount usersAccount = db.usersAccounts.Find(id);
            if (usersAccount == null)
            {
                return NotFound();
            }

            db.usersAccounts.Remove(usersAccount);
            db.SaveChanges();

            return Ok(usersAccount);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool usersAccountExists(int id)
        {
            return db.usersAccounts.Count(e => e.id == id) > 0;
        }
    }
}